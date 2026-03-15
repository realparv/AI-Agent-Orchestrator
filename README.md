# VectorShift Frontend Technical Assessment

This project is a visual flow builder designed to construct, visualize, and validate processing pipelines (Directed Acyclic Graphs) using a node-based architecture. It features a React frontend and a FastAPI (Python) backend.

## Features Implemented

### 1. Node Abstraction Architecture
The application features a fully scalable `BaseNode` React component pattern, allowing new nodes to be created with minimal boilerplate code. 
- **Stock Nodes Refactored**: `Input`, `Output`, `LLM`, and `Text` nodes were completely refactored.
- **5 Custom Nodes Added**:
  - `NoteNode`: A custom yellow sticky-note aesthetic for documentation.
  - `MathNode`: For math operations.
  - `TransformNode`: For data transformations.
  - `DatabaseNode`: For database queries.
  - `TriggerNode`: For pipeline execution entry points.

### 2. Premium UI/UX Design
The frontend has been completely overhauled with a modern dark-mode aesthetic featuring:
- **Glassmorphism Styling**: Floating toolbars, a customized grid background, and a transparent stylized MiniMap (`index.css`).
- **Thematic Node Colors**: Each node type incorporates unique color palettes, gradients, inner borders, and glowing hover states.
- **Drag-and-Drop Editor**: Fully functional `reactflow` implementation.

### 3. Dynamic Node Functionality
- **Text Handle Parsing**: The `TextNode` utilizes regex parsing to detect `{{ variable }}` syntax formats, dynamically generating corresponding target connection handles on the fly as users type.
- **Dynamic Resizing**: Textareas automatically adjust height based on their inner content.
- **Node Deletion**: All nodes natively integrate a functional `✕` deletion button that updates the global `zustand` state store to strip elements and their connected edges.

### 4. Backend Graph Validation
- Integrated an asynchronous `POST /pipelines/parse` endpoint via FastAPI.
- Validates the overall structure of the submitted pipeline by checking if it constitutes a valid **Directed Acyclic Graph (DAG)** utilizing a mathematical Depth-First Search (DFS) cycle-detection algorithm.
- Displays the graph's metadata (Node Count, Edge Count, and DAG compliance) in a frontend alert upon submission.

## Tech Stack
- **Frontend**: React, React Flow, Zustand State Manager
- **Backend**: Python, FastAPI, Uvicorn Server

---

## How to Run

You will need two independent terminal windows running simultaneously to launch both the clientside and serverside programs.

### 1. Start the React Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend-20260315T120357Z-1-001/frontend
   ```
2. Install the necessary NPM dependencies (if you haven't already):
   ```bash
   npm install
   ```
3. Boot the development server:
   ```bash
   npm start
   ```
   *The application should automatically open at `http://localhost:3000`.*

### 2. Start the FastAPI Python Backend

1. Navigate to the backend directory:
   ```bash
   cd backend-20260315T120359Z-1-001/backend
   ```
2. Install the required Python packages:
   ```bash
   pip install fastapi uvicorn python-multipart
   ```
3. Start the reloadable Uvicorn server:
   ```bash
   python -m uvicorn main:app --reload
   ```
   *The backend will boot up locally at `http://localhost:8000`.*
