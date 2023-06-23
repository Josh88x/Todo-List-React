import React from 'react'
import Todo from './Todo'
import { useState } from 'react'

const TodoList = () => {
    const [newTodos, setNewTodos] = useState('');
    const [todos, setTodos] = useState([]);

    const handleNewTodos = (e) => {
        setNewTodos(e.target.value)
    }

    const addTodo = (e) => {
        e.preventDefault();
        if (newTodos.trim() !== '') {
            setTodos([...todos, { id: Math.floor(Math.random() * 10000), text: newTodos }])
        };
        setNewTodos('')
    }

    const deleteTodoId = id => {
        const newTodo = todos.filter(todo => todo.id !== id);
        setTodos(newTodo);
    }

    const clearTodos = (e) => {
        e.preventDefault();
        setTodos([])
    }


    const editTodo = (id, newText) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.text = newText;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    

    return (
        <div className='container flex flex-col items-center md:px-14 md:text-2xl'>
            <h1 className='text-3xl md:text-4xl mb-6'>Todo List</h1>
            <form onSubmit={addTodo} className='flex items-center justify-center gap-2'>
                <label className='text-xl font-semibold'>Enter Todo</label>
                <input value={newTodos} onChange={handleNewTodos} className='bg-[#f3f0ff] text-[#5f3dc4] text-xl border rounded pl-1 focus:outline-[#5f3dc4]' type="text" placeholder='Do dishes' />
                <button onClick={addTodo} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Submit</button>
            </form>
            <div className=' w-full h-full flex flex-col gap-3 items-start mt-12 py-8 px-4 overflow-y-auto'>
            <button onClick={clearTodos} className='mx-auto'>Clear</button>
                {todos.map(todo => (
                    <Todo key={todo.id} id={todo.id} value={todo.text} edit={editTodo} deleteTodo={deleteTodoId} />
                ))}
            </div>
        </div>
    )
}

export default TodoList