import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'

const NewTodoForm = ({ createTodo }) => {
    const [task, setTask] = useState("")

    const handleChange = evt => {
        setTask(evt.target.value)
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        createTodo({task, id: uuid()});
        setTask("");
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="task">Task: </label>
                    <input 
                        id="task"
                        type="text"
                        name="task"
                        onChange={handleChange}
                        value={task}
                    />
                </div>
            <button style={{margin: "4px"}}>Add Task</button>
            </form>
        </div>
    )
}

export default NewTodoForm