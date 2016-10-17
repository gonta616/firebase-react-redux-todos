
function todos(state = [], action){
  switch (action.type) {
    case 'TODOS_RECEIVE_DATA':
      let todos = []
      if (action.data){
        Object.keys(action.data).forEach(key =>{
          let todo = action.data[key];
          todos.push({
            key: key,
            text: todo.text,
            completed: todo.completed,
          })
        });
      }
      return [...todos]

    case 'TODOS_RECIVE_ERROR':
    case 'ADD_TASK_ERROR':
    case 'UPDATE_TASK_ERROR':
    case 'DELETE_TASK_ERROR':
      alert(action.message)

    case 'ADD_TODO':
    return [
      ...state,
      {
        key: action.data.key,
        text: action.data.text,
        completed: action.data.completed,
      }
    ]

    case 'CHANGE_TODO':
      state.map(todo => {
        if(todo.key === action.data.key){
          todo.completed = !todo.completed;
        }
      });
      return [
        ...state
      ]

    case 'DELETE_TODO':
      let n = state.filter(todo => todo.key !== action.data.key)
      return [
        ...n
      ]

    default:
      return state
  }
}

export default todos
