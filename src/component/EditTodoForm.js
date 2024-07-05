import React, { useState } from 'react'

// This form is very similar to TodoForm but it uses the task already present as a previous state (in the use state) and modifies it accordingly 

const EditTodoForm = ({editTodo,task}) => {
    const [value,setValue] = useState(task.task)
    const addTask  = (e) =>{
        e.preventDefault();
        editTodo(value, task.id)
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit = {addTask}>
        <input 
        type = "text"
        value = {value}
        placeholder = "Update Task"
        className='todo-input'
        
        // event.target.value is used to keep track of users input.
        onChange={(e) => setValue(e.target.value)}/>
        
        <button type = "submit"
        className='todo-btn'>Update</button>
    </form>
  )
}

export default EditTodoForm
