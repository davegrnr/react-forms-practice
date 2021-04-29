import React from 'react';
import './Todo.css'


function Todo({
    id,
    task,
    remove
}) {
    const handleDelete = () => remove(id)

    return (
        <div class="task-div">
            <li>{task} <button onClick={handleDelete} class="btn-remove">X</button></li> 
        </div>
    )
}

export default Todo