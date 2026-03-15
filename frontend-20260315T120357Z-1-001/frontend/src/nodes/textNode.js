// textNode.js

import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    // Regex to match JavaScript variable names inside {{ }}
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = Array.from(currText.matchAll(regex)).map(match => match[1]);
    
    // Remove duplicates
    const uniqueVars = [...new Set(matches)];
    setVariables(uniqueVars);
  }, [currText]);

  useEffect(() => {
    if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  const handles = variables.map((variable, index) => ({
    type: 'target',
    position: Position.Left,
    id: `${id}-${variable}`,
    style: { top: `${(index + 1) * 100 / (variables.length + 1)}%` }
  }));

  // Add standard source handle
  handles.push({
    type: 'source',
    position: Position.Right,
    id: `${id}-output`
  });

  return (
    <BaseNode 
      id={id} 
      label="Text 📝" 
      handles={handles} 
      style={{ 
        width: Math.max(250, currText.length * 2.5), 
        minWidth: 250,
        background: 'linear-gradient(145deg, rgba(50, 40, 10, 0.8), rgba(25, 20, 5, 0.9))',
        borderColor: 'rgba(255, 180, 50, 0.3)',
        boxShadow: '0 8px 32px rgba(255, 180, 50, 0.1)'
      }}
    >
      <label style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
        <span style={{ fontSize: '12px', color: '#ffcc88', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Template String</span>
        <textarea 
          ref={textareaRef}
          value={currText} 
          onChange={handleTextChange} 
          style={{
            padding: '8px', 
            borderRadius: '6px', 
            border: '1px solid rgba(255, 180, 50, 0.4)', 
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: '#fff',
            resize: 'none', 
            overflow: 'hidden',
            fontFamily: 'inherit',
            lineHeight: '1.4'
          }}
          rows={1}
        />
      </label>
      <div style={{ fontSize: '11px', color: 'rgba(255, 180, 50, 0.6)', marginTop: '4px' }}>
        Use {'{{ variable }}'} for dynamic handles
      </div>
    </BaseNode>
  );
}
