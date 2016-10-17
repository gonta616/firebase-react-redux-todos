import React, {Component, PropTypes} from 'react'
import Todo from './Todo'

class TodoList extends Component{
  render(){
    const {todos, onDeleteClick, onTodoClick} = this.props;
    let list = []
    todos.map(todo => {
      list.push(
        <div style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Todo
            key={todo.key}
            text={todo.text}
            completed={todo.completed}
            onClick={() => onTodoClick(todo.key)}
          />
          <div
            style={{marginLeft:10, fontSize:8, color:'red'}}
            onClick={() => onDeleteClick(todo.key)}>
            Delete
          </div>
        </div>
      )
    });
    return(
      <ul>
        {list}
      </ul>
    )
  }
}

TodoList.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList;
