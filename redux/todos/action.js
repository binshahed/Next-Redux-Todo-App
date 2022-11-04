import { ADDED, TOGGLED, DELETED } from './actionType'

export const added = (todoText, todoDescription) => {
  return {
    type: ADDED,
    payload: { todoText, todoDescription }
  }
}

export const toggled = todoId => {
  return {
    type: TOGGLED,
    payload: todoId
  }
}
export const deleted = todoId => {
  return {
    type: DELETED,
    payload: todoId
  }
}
