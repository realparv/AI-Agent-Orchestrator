// BaseNode.js

import { Handle, Position } from 'reactflow';
import React from 'react';
import { useStore } from '../store';

export const BaseNode = ({ id, label, children, handles = [], style = {}, className="" }) => {
  const deleteNode = useStore((state) => state.deleteNode);

  return (
    <div className={`base-node ${className}`} style={style}>
      {handles.map((handle, index) => (
        <Handle
          key={handle.id || `${id}-handle-${index}`}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style || {}}
        />
      ))}
      <div className="base-node-header">
        <span>{label}</span>
        <button className="node-delete-btn" onClick={() => deleteNode(id)} title="Delete node">✕</button>
      </div>
      <div className="base-node-body">
        {children}
      </div>
    </div>
  );
};
