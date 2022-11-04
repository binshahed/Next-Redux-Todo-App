import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { added } from '../redux/todos/action'

const TopBar = () => {
  const dispatch = useDispatch()

  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')
  const handleTask = e => {
    setTask(e.target.value)
  }
  const handleDescription = e => {
    setDescription(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(added(task, description))
    setTask('')
    setDescription('')
  }

  return (
    <div>
      <form className='w-full bg-gray-100' onSubmit={handleSubmit}>
        <div className='flex items-center border-b border-slate-900 py-2'>
          <input
            type='text'
            placeholder='Type your task'
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            value={task}
            onChange={handleTask}
          />
          <input
            type='text'
            placeholder='Type your task description'
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            value={description}
            onChange={handleDescription}
          />
          <button
            type='submit'
            // className={`appearance-none w-8 h-8 bg-[url('https://cdn-icons-png.flaticon.com/512/262/262038.png')] bg-no-repeat bg-contain`}
            class='flex-shrink-0 bg-slate-900 hover:bg-slate-800 border-slate-900 hover:border-slate-800 text-sm border-4 text-white py-1 px-2 rounded'
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default TopBar
