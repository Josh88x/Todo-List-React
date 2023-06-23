import React from 'react'
import { useState } from 'react';

const Todo = ({ value, id, edit, deleteTodo }) => {

  //  used to keep track of whether the user is currently editing the to-do item
  const [isEditing, setIsEditing] = useState(false);
  // object that represents the to-do item being edited. It has two properties: id (the ID of the to-do item) and text (the current text of the to-do item being edited)
  const [editedTodo, setEditedTodo] = useState({ id: null, text: '' });
  // used to store the new text of the to-do item as the user types in the input field.
  const [editedText, setEditedText] = useState(value);

  const removeTodo = () => {
    deleteTodo(id)
  }


  const handleEdit = () => {
    setIsEditing(true);
    setEditedTodo({ id, text: value });
  };

  const handleEditChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    edit(editedTodo.id, editedText);
    setIsEditing(false);
    setEditedTodo({ id: null, text: '' });
  };

  return (
    <div className='flex gap-2 justify-between  w-full px-3'>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className='flex gap-2'>
          <input
            value={editedText}
            onChange={handleEditChange}
            className='bg-[#f3f0ff] text-[#5f3dc4] text-xl border rounded pl-1 focus:outline-[#5f3dc4]'
            type="text"
          />
          <button type="submit" className='bg-[#bac8ff] font-semibold text-[#1c7ed6] rounded hover:text-[#f8f9fa] hover:bg-[#4dabf7] px-2 py-1'>Save</button>
        </form>
      ) : (
        <>
          <h1 className='text-2xl break-words max-w-xs'>{value[0].toUpperCase() + value.slice(1).toLowerCase()}</h1>
          <div className='flex gap-4'>
            <button onClick={removeTodo} className=''>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Todo