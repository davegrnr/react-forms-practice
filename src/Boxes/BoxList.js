import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm'
import Box from './Box'
import { v4 as uuid } from 'uuid'

const BoxList = () => {
    const INITIAL_STATE = []

    const [boxes, setBoxes] = useState(INITIAL_STATE)

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }
    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
      };

    return (
        <div>
            <h3>Create a New Box!</h3>
            <NewBoxForm addBox={addBox} />

            <div>
                {boxes.map(({id, color, height, width}) => 
                    <Box 
                        id={id} 
                        color={color} 
                        height={height} 
                        width={width}
                        key={id} 
                        handleRemove={removeBox}
                    />)}
            </div>
        </div>
    )
}

export default BoxList