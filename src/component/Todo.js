import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>

        {/* toggleComplete has an attribute task.id which identifies a particular 
        task that is being clicked and marks the task as complete. */}
        <p onClick = {() => toggleComplete(task.id)} 

        // ensures that the task has a class complete if its marked else todo-item if its not marked( not completed)
        className={`${task.completed? 'completed': 'todo-item'}`}>{task.task}</p>
        
        <div className = "img-container">
            <FontAwesomeIcon className = 'img' icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
            <FontAwesomeIcon className = 'img' icon={faTrash} onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}

export default Todo
