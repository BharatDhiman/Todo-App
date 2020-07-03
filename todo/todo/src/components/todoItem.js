import React, { Component } from 'react'

export class TodoItem extends Component {
    

    getStyle = () => {
        return{
            textDecoration: this.props.todo.isCompleted ? 'line-through':'none',
            color: this.props.todo.isCompleted ? 'grey':'black'

        }
    }
    render() {

        return (
            <div style={this.getStyle()} >
                {this.props.todo.isCompleted? <label className="todoContainer"><input type="checkbox" onChange={this.props.toggleTodo.bind(this,this.props.index)} checked ></input></label>: <label className="todoContainer"> <input type="checkbox"  onChange={this.props.toggleTodo.bind(this,this.props.index)} ></input> <span className="checkmark"></span> </label> } <span className="todoCAption"> {this.props.todo.caption}</span><button id={this.props.todo.id} key={this.props.todo.id} className="del" onClick={this.props.deleteTodo.bind(this,this.props.index)} >X</button>
            </div>
        )
    }
}

export default TodoItem
