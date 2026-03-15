// outputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-value` }
  ];

  return (
    <BaseNode 
      id={id} 
      label="Output 📤" 
      handles={handles}
      style={{
        background: 'linear-gradient(145deg, rgba(60, 20, 30, 0.8), rgba(35, 10, 15, 0.9))',
        borderColor: 'rgba(255, 100, 120, 0.3)',
        boxShadow: '0 8px 32px rgba(255, 100, 120, 0.15)'
      }}
    >
      <label style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
        <span style={{ fontSize: '12px', color: '#ffb3b3', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Field Name</span>
        <input 
          type="text" 
          value={currName} 
          onChange={handleNameChange} 
          style={{
            padding: '8px', 
            borderRadius: '6px', 
            border: '1px solid rgba(255, 100, 120, 0.4)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: '#fff'
          }}
        />
      </label>
      <label style={{display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '4px'}}>
        <span style={{ fontSize: '12px', color: '#ffb3b3', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Output Type</span>
        <select 
          value={outputType} 
          onChange={handleTypeChange} 
          style={{
            padding: '8px', 
            borderRadius: '6px', 
            border: '1px solid rgba(255, 100, 120, 0.4)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: '#fff'
          }}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
}
