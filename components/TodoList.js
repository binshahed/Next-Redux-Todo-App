import { useSelector } from 'react-redux'
import Todo from './Todo'

export default function TodoList () {
  const toods = useSelector(state => state.todos)

  return (
    <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
      {toods.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
