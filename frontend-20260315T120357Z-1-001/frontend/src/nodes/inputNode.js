// inputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-value` }
  ];

  return (
    <BaseNode 
      id={id} 
      label="Input 📥" 
      handles={handles}
      style={{
        background: 'linear-gradient(145deg, rgba(20, 35, 60, 0.8), rgba(10, 20, 35, 0.9))',
        borderColor: 'rgba(88, 166, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(88, 166, 255, 0.15)'
      }}
    >
      <label style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
        <span style={{ fontSize: '12px', color: '#88aaff', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Field Name</span>
        <input 
          type="text" 
          value={currName} 
          onChange={handleNameChange} 
          style={{
            padding: '8px', 
            borderRadius: '6px', 
            border: '1px solid rgba(88, 166, 255, 0.4)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: '#fff'
          }}
        />
      </label>
      <label style={{display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '4px'}}>
        <span style={{ fontSize: '12px', color: '#88aaff', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Input Type</span>
        <select 
          value={inputType} 
          onChange={handleTypeChange} 
          style={{
            padding: '8px', 
            borderRadius: '6px', 
            border: '1px solid rgba(88, 166, 255, 0.4)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: '#fff'
          }}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
}
