import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Todo extends Component {
  render(){
    const {key, onClick, completed, text } = this.props;
    return(
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}>
        {text}
      </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
