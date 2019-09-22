import React, {Component} from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <>
        <p>home</p>
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
)(Home);
