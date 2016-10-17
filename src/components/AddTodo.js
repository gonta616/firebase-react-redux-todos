import React, {Component, PropTypes} from 'react'

class AddTodo extends Component {

  render(){
    let input;
    return(
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.onAddTodo(input.value)
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
}

export default AddTodo;
