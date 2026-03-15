// llmNode.js

import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: `${100/3}%` } },
    { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: `${200/3}%` } },
    { type: 'source', position: Position.Right, id: `${id}-response` }
  ];

  return (
    <BaseNode 
      id={id} 
      label="LLM 🧠" 
      handles={handles}
      style={{
        background: 'linear-gradient(145deg, rgba(40, 20, 60, 0.8), rgba(20, 10, 35, 0.9))',
        borderColor: 'rgba(180, 100, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(180, 100, 255, 0.15)'
      }}
    >
      <div style={{ 
        padding: '12px', 
        fontSize: '13px', 
        color: '#d8b4fe',
        background: 'rgba(180, 100, 255, 0.1)',
        borderRadius: '6px',
        borderLeft: '4px solid rgba(180, 100, 255, 0.5)'
      }}>
        <span>Language Model Engine</span>
      </div>
    </BaseNode>
  );
}
