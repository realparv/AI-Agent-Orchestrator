// submit.js
import { useStore } from './store';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);
    const clearedNodes = useStore((state) => state.clearedNodes);
    const clearAllNodes = useStore((state) => state.clearAllNodes);
    const undoClearNodes = useStore((state) => state.undoClearNodes);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            alert(`Pipeline parsed successfully!
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag}`);
        } catch (error) {
            console.error('Error parsing pipeline:', error);
            alert('Failed to parse pipeline. Check console for details.');
        }
    };

    return (
        <div className="submit-btn-container" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {clearedNodes && clearedNodes.length > 0 && nodes.length === 0 ? (
                <button className="undo-btn" onClick={undoClearNodes}>
                    Undo Clear
                </button>
            ) : (
                <button className="clear-btn" onClick={clearAllNodes}>
                    Clear All
                </button>
            )}
            <button className="submit-btn" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}
