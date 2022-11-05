import { ADDED, TOGGLED, DELETED, EDITED } from './actionType'

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
export const edited = (todoId, todoText, todoDescription) => {
  return {
    type: EDITED,
    payload: { todoId, todoText, todoDescription }
  }
}
