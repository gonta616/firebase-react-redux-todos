import React, {Component} from 'react'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    return (
      <>
        <p>list</p>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos ? state.todos : []
  };
}

export default connect(
  mapStateToProps,
)(List);
