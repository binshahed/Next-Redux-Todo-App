import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleted, toggled } from '../redux/todos/action'
import TodoForm from './TodoForm'

export default function Todo ({ todo }) {
  const [editToggle, setEditToggle] = useState(false)
  const dispatch = useDispatch()
  const { text, description, completed, id } = todo

  const handleStatusChange = id => {
    dispatch(toggled(id))
  }

  const handleDelete = id => {
    dispatch(deleted(id))
  }

  return (
    <>
      <div className='flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0'>
        <div
          className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed &&
            'border-green-500 focus-within:border-green-500'}`}
        >
          <input
            type='checkbox'
            checked={completed}
            onChange={() => handleStatusChange(id)}
            className='opacity-0 absolute rounded-full'
          />
          {completed && (
            <svg
              className='fill-current w-3 h-3 text-green-500 pointer-events-none'
              viewBox='0 0 20 20'
            >
              <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
            </svg>
          )}
        </div>

        <div className='select-none flex-1'>
          <h1 className={`text-xl font-bold ${completed && 'line-through'}`}>
            {text}
          </h1>
          <p>{description}</p>
        </div>

        <img
          src='https://cdn-icons-png.flaticon.com/512/32/32355.png'
          className='flex-shrink-0 w-4 h-4 ml-2 cursor-pointer'
          alt='Cancel'
          onClick={() => setEditToggle(!editToggle)}
        />
        <img
          src='https://cdn-icons-png.flaticon.com/512/66/66847.png'
          className='flex-shrink-0 w-4 h-4 ml-2 cursor-pointer'
          alt='Cancel'
          onClick={() => handleDelete(id)}
        />
      </div>
      {editToggle && (
        <TodoForm
          btnText='Update'
          id={id}
          updateText={text}
          updateDescription={description}
          setEditToggle={setEditToggle}
        />
      )}
    </>
  )
}
