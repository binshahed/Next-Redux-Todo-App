import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { added } from '../redux/todos/action'

const TopBar = () => {
  const dispatch = useDispatch()

  const [input, setInput] = useState('')
  const handleInput = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(added(input))
    setInput('')
  }

  return (
    <div>
      <form
        className='flex items-center bg-gray-100 px-4 py-4 rounded-md'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='Type your todo'
          className='w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500'
          value={input}
          onChange={handleInput}
        />
        <button
          type='submit'
          className={`appearance-none w-8 h-8 bg-[url('https://cdn-icons-png.flaticon.com/512/262/262038.png')] bg-no-repeat bg-contain`}
        ></button>
      </form>
    </div>
  )
}

export default TopBar
