import React, {Component} from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header';
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

import todo from '../actions/todos'

class App extends Component {

  constructor(){
    super();
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(todo.loadTodos());
  }

  render(){
    const {todos} = this.props;
    return (
      <>
        <div>React + Redux Sample</div>
        <AddTodo onAddTodo={this.addTodo}  />
        <TodoList
          todos={todos}
          onDeleteClick={this.deleteTodo}
          onTodoClick={this.toggleTodo} />
      </>
    )
  }

  addTodo(text){
    const {dispatch} = this.props;
    dispatch(todo.addTodo(text))
  }

  deleteTodo(key){
    const {dispatch} = this.props;
    dispatch(todo.deleteTodo(key))
  }

  toggleTodo(key){
    const {dispatch} = this.props;
    dispatch(todo.updateTodo(key))
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos ? state.todos : []
  };
}

export default connect(
  mapStateToProps,
)(App);
