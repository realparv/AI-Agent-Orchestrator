import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position, Handle } from 'reactflow';
import { useStore } from '../store';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || 'This is a note.');
  const deleteNode = useStore((state) => state.deleteNode);

  return (
    <div style={{
      width: 250,
      minHeight: 120,
      background: 'linear-gradient(145deg, rgba(255, 235, 120, 0.95), rgba(255, 220, 80, 0.95))',
      boxShadow: '0 8px 32px rgba(255, 230, 100, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.6)',
      border: '1px solid rgba(255, 240, 150, 0.5)',
      borderRadius: '8px 8px 8px 32px',
      padding: '16px',
      color: '#3d3000',
      fontFamily: '"Comic Sans MS", "Chalkboard SE", "Comic Neue", sans-serif',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '40px',
        height: '12px',
        background: 'rgba(255, 255, 255, 0.4)',
        borderBottomRadius: '4px',
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
      }} />
      <button 
        onClick={() => deleteNode(id)}
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          background: 'transparent',
          border: 'none',
          color: 'rgba(0,0,0,0.4)',
          cursor: 'pointer',
          fontSize: '14px',
          padding: '2px 6px',
          borderRadius: '4px'
        }}
        onMouseOver={(e) => { e.currentTarget.style.color = '#ff4444'; e.currentTarget.style.background = 'rgba(255,0,0,0.1)'; }}
        onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(0,0,0,0.4)'; e.currentTarget.style.background = 'transparent'; }}
      >
        ✕
      </button>
      <textarea 
        value={note} 
        onChange={(e) => setNote(e.target.value)} 
        style={{ 
          width: '100%', 
          height: '100%', 
          minHeight: '80px',
          border: 'none', 
          background: 'transparent', 
          resize: 'none', 
          fontFamily: 'inherit',
          fontSize: '14px',
          color: 'inherit',
          outline: 'none',
          lineHeight: '1.5',
          marginTop: '12px'
        }}
        placeholder="Type a note..."
      />
    </div>
  );
};

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'Add');

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-a`, style: { top: '33%' } },
    { type: 'target', position: Position.Left, id: `${id}-b`, style: { top: '66%' } },
    { type: 'source', position: Position.Right, id: `${id}-result` }
  ];

  return (
    <BaseNode 
      id={id} 
      label="Math 🧮" 
      handles={handles}
      style={{
        background: 'linear-gradient(145deg, rgba(20, 45, 55, 0.8), rgba(10, 25, 30, 0.9))',
        borderColor: 'rgba(50, 200, 220, 0.3)',
        boxShadow: '0 8px 32px rgba(50, 200, 220, 0.15)'
      }}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={{ fontSize: '12px', color: '#88ddff', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Operation</span>
        <select 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)} 
          style={{ 
            padding: '8px', 
            borderRadius: '6px', 
            border: '1px solid rgba(50, 200, 220, 0.4)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: '#fff'
          }}
        >
          <option value="Add">Add</option>
          <option value="Subtract">Subtract</option>
          <option value="Multiply">Multiply</option>
          <option value="Divide">Divide</option>
        </select>
      </label>
    </BaseNode>
  );
};

export const TransformNode = ({ id, data }) => {
  const [formula, setFormula] = useState(data?.formula || 'x * 2');

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-input` },
    { type: 'source', position: Position.Right, id: `${id}-output` }
  ];

  return (
    <BaseNode 
      id={id} 
      label="Transform ⚙️" 
      handles={handles}
      style={{
        background: 'linear-gradient(145deg, rgba(60, 40, 20, 0.8), rgba(30, 20, 10, 0.9))',
        borderColor: 'rgba(255, 140, 50, 0.3)',
        boxShadow: '0 8px 32px rgba(255, 140, 50, 0.15)'
      }}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={{ fontSize: '12px', color: '#ffbb88', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Formula (x)</span>
        <input 
          type="text" 
          value={formula} 
          onChange={(e) => setFormula(e.target.value)} 
          style={{ 
            padding: '8px', 
            borderRadius: '6px', 
            border: '1px solid rgba(255, 140, 50, 0.4)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: '#fff' 
          }}
        />
      </label>
    </BaseNode>
  );
};

export const DatabaseNode = ({ id, data }) => {
  const [dbName, setDbName] = useState(data?.dbName || 'Postgres');

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-query` },
    { type: 'source', position: Position.Right, id: `${id}-results` }
  ];

  return (
    <BaseNode 
      id={id} 
      label="Database 🗄️" 
      handles={handles}
      style={{
        background: 'linear-gradient(145deg, rgba(31, 26, 61, 0.8), rgba(16, 14, 28, 0.9))',
        borderColor: 'rgba(138, 110, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(100, 70, 255, 0.15)'
      }}
    >
      <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={{ fontSize: '12px', color: '#a09cf0', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Connection</span>
        <input 
          type="text" 
          value={dbName} 
          onChange={(e) => setDbName(e.target.value)} 
          style={{ 
            padding: '8px', 
            borderRadius: '6px', 
            border: '1px solid rgba(138, 110, 255, 0.4)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: '#fff'
          }}
          placeholder="e.g. Postgres"
        />
      </label>
      <div style={{ 
        fontSize: '11px', 
        color: '#7b76c4', 
        background: 'rgba(138, 110, 255, 0.1)',
        padding: '6px 8px',
        borderRadius: '4px',
        marginTop: '4px',
        borderLeft: '2px solid rgba(138, 110, 255, 0.5)'
      }}>
        Executes query on {dbName || 'DB'}
      </div>
    </BaseNode>
  );
};

export const TriggerNode = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-trigger` }
  ];

  return (
    <BaseNode 
      id={id} 
      label="Trigger ⚡" 
      handles={handles} 
      style={{ 
        background: 'linear-gradient(145deg, rgba(20, 40, 25, 0.8), rgba(10, 25, 15, 0.9))', 
        borderColor: 'rgba(50, 200, 100, 0.4)',
        boxShadow: '0 8px 32px rgba(50, 200, 100, 0.15)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
        <button 
          style={{ 
            padding: '10px 16px', 
            borderRadius: '24px', 
            border: 'none', 
            cursor: 'pointer', 
            background: 'linear-gradient(145deg, #2ea043, #238636)',
            color: '#fff',
            fontWeight: '600',
            fontSize: '13px',
            boxShadow: '0 4px 12px rgba(46, 160, 67, 0.3)',
            transition: 'all 0.2s ease',
            width: '100%'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(46, 160, 67, 0.5)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(46, 160, 67, 0.3)'; }}
          onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(1px)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(46, 160, 67, 0.2)'; }}
          onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(46, 160, 67, 0.5)'; }}
        >
          Execute Pipeline
        </button>
      </div>
    </BaseNode>
  );
};
