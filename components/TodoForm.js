import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { added, edited } from '../redux/todos/action'

const TodoForm = ({
  btnText,
  id,
  updateText,
  updateDescription,
  setEditToggle
}) => {
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

    if (btnText) {
      dispatch(edited(id, task || updateText, description || updateDescription))
      setEditToggle(false)
    } else {
      if (task) {
        dispatch(added(task, description))
      }
    }
  }

  return (
    <div>
      <form className='w-full bg-gray-100' onSubmit={handleSubmit}>
        <div className='flex items-center border-b border-slate-900 py-2'>
          <input
            type='text'
            placeholder='Type your task'
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            defaultValue={task || updateText}
            onChange={handleTask}
          />
          <input
            type='text'
            placeholder='Type your task description'
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            defaultValue={description || updateDescription}
            onChange={handleDescription}
          />
          <button
            type='submit'
            className='flex-shrink-0 bg-slate-900 hover:bg-slate-800 border-slate-900 hover:border-slate-800 text-sm border-4 text-white py-1 px-2 rounded'
          >
            {btnText || 'Add'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm
