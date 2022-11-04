const getInitialState = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('todo-value'))
  } else {
    return []
  }
}
export const initialState = getInitialState()
// export const initialState = [
//   {
//     id: 1,
//     text: 'Todo One',
//     completed: true
//   },
//   {
//     id: 2,
//     text: 'Todo no',
//     completed: false
//   }
// ]
