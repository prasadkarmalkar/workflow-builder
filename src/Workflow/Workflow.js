import React, { useState } from 'react'
import ReactFlow, { addEdge, removeElements } from 'react-flow-renderer';
import CustomNode from './CustomNode';
import './Workflow.css'
function Workflow(props) {
    const nodeTypes = {
        special: CustomNode,
    };
    const onElementsRemove = (elementsToRemove) =>
        props.setElements((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => props.setElements((els) => addEdge(params, els));


    // On Click Of Button Create Action
    const createActionHandler = () => {
        if (!props.isSliderOn) {
            props.setIsSliderOn(true);
        }
    }
    return (
        <div className="workflow">
            <ReactFlow
                nodeTypes={nodeTypes}
                elements={props.elements}
                onElementsRemove={onElementsRemove}
                onConnect={onConnect}
                deleteKeyCode={46} /* 'delete'-key */
            />
            <button onClick={createActionHandler} className=" workflow__createaction btn btn-primary">+ Create Action</button>
        </div>
    )
}

export default Workflow
