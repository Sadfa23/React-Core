import React, { useState } from 'react'

function TodoApp() {
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])

    
    const addItem = ()=>{
        const newTask = {
            id: Date.now(),
            text: task
        }
        setTodos([...todos, newTask])
        setTask('')
    }

    const deleteTask = (id)=> {
        setTodos(todos.filter((todo)=> todo.id !== id))
    }

    const handleChange = (e)=>{
        setTask(e.target.value)
    }
  return (
    <div>
        <label htmlFor="" className='text-black font-bold'>Task</label>
        <input 
        type="text"
        value={task}
        placeholder='Enter a task'
        onChange={handleChange} />
        <button
        onClick={addItem}
        className='bg-blue-600 text-white p-2 rounded-lg mr-2'>
            Add
        </button>

        <ul>
            {
                todos.map((todo)=>(
                    <li key={todo.id}>{todo.text}
                    <button 
                    onClick={()=>deleteTask(todo.id)}
                    className='bg-red-600 text-white p-2'>
                        DELETE
                    </button>
                    </li>)
                )
            }
        </ul>

    </div>
  )
}

export default TodoApp