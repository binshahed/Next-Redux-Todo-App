import { initialState } from './initialState'
import { ADDED, TOGGLED, DELETED } from './actionType'

function nextTodoId (todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false
        }
      ]
    case TOGGLED:
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })

    case DELETED:
      return state.filter(todo => todo.id !== action.payload)

    default:
      return state
  }
}

export default reducer
