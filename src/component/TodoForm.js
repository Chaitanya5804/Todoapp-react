import React, { useState } from 'react'
const TodoForm = ({addTodo}) => {

    // we declare the useState as empty string so that the initial value is an empty string.
    const [value,setValue] = useState("")

    const addTask  = (e) =>{

        // preventDefault prevents the default functioning (i.e refreshing the page) after the form is submitted.
        e.preventDefault();

        addTodo(value)
        setValue("") /* It ensures that the input is set to empty string after adding an todo element. */
    }
  return (
    <form className='TodoForm' onSubmit = {addTask}>
        <input 
        type = "text"
        value = {value}
        placeholder = "What is to be done?"
        className='todo-input'
        onChange={(e) => setValue(e.target.value)}/>
        <button type = "submit"
        className='todo-btn'>List It</button>
    </form>
  )
}

export default TodoForm
