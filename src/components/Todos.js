import { render } from '@testing-library/react'
import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  
    render(){
        // console.log(this.props.todos);
        return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} 
        markedComplete={this.props.markedComplete}
        delTodo = {this.props.delTodo} />
        ));
    }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markedComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}



export default Todos;