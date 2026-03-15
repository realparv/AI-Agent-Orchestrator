// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="toolbar-container">
            <DraggableNode type='customInput' label='Input' />
            <DraggableNode type='llm' label='LLM' />
            <DraggableNode type='customOutput' label='Output' />
            <DraggableNode type='text' label='Text' />
            <DraggableNode type='note' label='Note' />
            <DraggableNode type='math' label='Math' />
            <DraggableNode type='transform' label='Transform' />
            <DraggableNode type='database' label='Database' />
            <DraggableNode type='trigger' label='Trigger' />
        </div>
    );
};
