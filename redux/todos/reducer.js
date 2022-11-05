import { initialState } from './initialState'
import { ADDED, TOGGLED, DELETED, EDITED } from './actionType'

function nextTodoId (todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

const reducer = (state = initialState || [], action) => {
  switch (action.type) {
    case ADDED:
      const allTodo = [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload.todoText,
          description: action.payload.todoDescription,
          completed: false
        }
      ]
      localStorage.setItem('todo-value', JSON.stringify(allTodo))
      return JSON.parse(localStorage.getItem('todo-value'))
    case TOGGLED:
      const updatedTodo = state.map(todo => {
        console.log(todo)
        if (todo.id !== action.payload) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })
      localStorage.setItem('todo-value', JSON.stringify(updatedTodo))
      return updatedTodo
    case EDITED:
      const editTodo = state.map(todo => {
        console.log(todo)
        if (todo.id !== action.payload.todoId) {
          return todo
        }
        return {
          ...todo,
          text: action.payload.todoText,
          description: action.payload.todoDescription
        }
      })
      localStorage.setItem('todo-value', JSON.stringify(editTodo))
      return editTodo

    case DELETED:
      const deletedItem = state.filter(todo => todo.id !== action.payload)
      localStorage.setItem('todo-value', JSON.stringify(deletedItem))
      return deletedItem

    default:
      return state
  }
}

export default reducer
