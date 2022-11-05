const getInitialState = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('todo-value'))
  } else {
    return []
  }
}
export const initialState = getInitialState()
