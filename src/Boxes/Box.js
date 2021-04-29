import React from 'react';

const Box = ({
    id, 
    color, 
    height, 
    width, 
    handleRemove
}) => {
    const removeBox = () => handleRemove(id)
    return (
        <div>
            <div id={id} style={{
                backgroundColor: `${color}`, 
                height: `${height}px`, 
                width: `${width}px`,
                margin: '10px auto',
                position: 'relative'
                }}>
            </div>
            <button 
            onClick={removeBox}
            style={{
            
            }}
            >Remove</button>
        </div>
    )
}

export default Box