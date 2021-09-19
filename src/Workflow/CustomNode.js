import React from 'react'
import { Handle } from 'react-flow-renderer'
import './CustomNode.css'
function CustomNode({ data }) {
    return (
        <div className="custom__node bg-dark">
            <Handle type="target" position="top" />
            <div className="custom__node__main">
                <div className="node__head">
                    <h1>{data.type}</h1>
                    <i class="fas fa-edit"></i>
                </div>
                <p className="custom__node__text">
                    {data.subject ? data.subject : ''}
                    {data.url ? data.url : ''}
                    {data.reminder ? data.reminder : ''}
                </p>
                <p className="custom__node__date">
                    {data.date},{data.time}
                </p>
            </div>
            <Handle
                type="source"
                position="bottom"
                id="a"
            />
        </div>
    )
}

export default CustomNode
