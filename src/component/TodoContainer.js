import React ,{useState,useEffect} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoContainer = () => {

    // Here the useState is set as an OR operation between an empty list and the value obtained from the local Storage.
    // This will recieve empty list when first entering the values and on entering and reusing the application the values in the local storage gets returned.
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem('todos')) || []
      });

    useEffect(() => {
        console.log(...todos)
        localStorage.setItem('todos', JSON.stringify(todos)); /* Sets the todos list in the localStorage with key todos. */
      }, [todos]);

    const clearTodos = () => {
        console.log('Clearing local storage and resetting todos state');

        // Resets the localStorage to an empty list[].
        localStorage.removeItem('todos');

        setTodos([]);
    };
      
    const addTodo = todo =>{
        let newTodo = {id:uuidv4(),task: todo,
            completed: false, isEdit:false}
        setTodos((todos) =>[...todos,newTodo]);
        
        // localStorage.setItem('todos', JSON.stringify([...todos,newTodo])); This is an another way to save todo items in local storage.
    }
    const toggleComplete = id  =>{ 
        let completedTodo = todos.map(todo => todo.id === id?{
            ...todo, completed: !todo.completed} : todo
        )
        setTodos(completedTodo);
    }
    const deleteTodo = id =>{ 
        const TodosAfterDeleting = todos.filter(todo => todo.id !== id);
        setTodos(TodosAfterDeleting);
        // localStorage.setItem("todos",JSON.stringify(TodosAfterDeleting))
    }
    const editTodo = id  =>{ 
        setTodos(todos.map(todo => todo.id === id?{
            ...todo,isEdit: !todo.isEdit} : todo
        ))
    }
    const editTask = (task,id)  =>{
        const modifiedTodo = todos.map(todo => todo.id === id?{
            ...todo,task,isEdit: !todo.isEdit} : todo
        )
        setTodos(modifiedTodo)
        // localStorage.setItem('todos',JSON.stringify(modifiedTodo))
    }
  return (
    <div className = "app-container">
        <h1 className='heading'>To-Do List</h1>
        <div className = "todo-container">
            <TodoForm addTodo = {addTodo}/>
            {todos.map((todo) =>(
                todo.isEdit?(
                    <EditTodoForm editTodo={editTask} 
                    task={todo}/>
                ):(
                <Todo task={todo} key={todo.id}
                toggleComplete={toggleComplete}
                deleteTodo = {deleteTodo}
                editTodo = {editTodo}/>
                )
            ))}
            <div className='clear'>
                <button className='clear-btn' onClick={clearTodos}>Clear All Tasks</button>
            </div>
        </div>
    </div>
  )
}

export default TodoContainer