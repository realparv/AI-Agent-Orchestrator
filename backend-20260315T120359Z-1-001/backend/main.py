from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    try:
        pipeline_data = json.loads(pipeline)
    except Exception:
        return {"error": "Invalid JSON in pipeline form field"}

    nodes = pipeline_data.get('nodes', [])
    edges = pipeline_data.get('edges', [])
    
    num_nodes = len(nodes)
    num_edges = len(edges)

    # Adjacency list for DAG check
    adj = {node['id']: [] for node in nodes}
    for edge in edges:
        source = edge.get('source')
        target = edge.get('target')
        if source in adj:
            adj[source].append(target)
            
    # DFS for cycle detection
    visited = {} # node_id -> process state (0: unvisited, 1: visiting, 2: visited)
    
    def has_cycle(node_id):
        state = visited.get(node_id, 0)
        if state == 1:
            return True
        if state == 2:
            return False
            
        visited[node_id] = 1
        for neighbor in adj.get(node_id, []):
            if has_cycle(neighbor):
                return True
        
        visited[node_id] = 2
        return False

    is_dag = True
    for node in nodes:
        if has_cycle(node['id']):
            is_dag = False
            break

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}
