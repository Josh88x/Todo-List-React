import React from 'react'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className='container mx-auto w-full h-[100vh] bg-gradient-to-br from-[#e7f5ff9d] to-[#91a7ff76] text-[#2d41a8] flex justify-center pt-14'>
      <TodoList/>
    </div>
  )
}

export default App
