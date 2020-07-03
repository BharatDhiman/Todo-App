import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodosAsync, delTodoAsync, toggleTodoAsync } from '../actions/todoActions';
import { PropTypes } from 'prop-types';
import TodoItem from './todoItem';


export class Todo extends Component {

    componentDidMount(){
       this.props.fetchTodosAsync();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newTodo){
            this.props.todos.push(nextProps.newTodo);
        }
    }


    deleteTodo = (id) =>{
       this.props.delTodoAsync(id);
        //console.log(id);
    }

    toggleTodo = (id) => {
        this.props.toggleTodoAsync(id);
    }

    render() {
     
        return (
            
            <div className="wrapper">
                <ul>
                  
                    { this.props.todos.map((todo,index) =>(
                        <li>
                        <TodoItem key={index} index={index} todo={todo} toggleTodo = {this.toggleTodo} deleteTodo={this.deleteTodo} />
                        </li>
                    )) }
                 
                </ul>
                
                
            </div>
        )
    }
}

Todo.propTypes = {
    fetchTodosAsync: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    newTodo: PropTypes.object,
    delTodoAsync: PropTypes.func,
    toggleTodoAsync: PropTypes.func
}

const mapStateToProps = state => ({
    todos: state.todos.todos,
    newTodo: state.todos.todo 
})

export default connect(mapStateToProps, { fetchTodosAsync, delTodoAsync, toggleTodoAsync })(Todo);
