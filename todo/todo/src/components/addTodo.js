import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodoAsync } from '../actions/todoActions';



export class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            caption: '',
        }

        this.onChange = this.onChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }

    onChange(e) {
        this.setState({ caption: e.target.value });
    }

    keyPress(e) {
        if(e.keyCode == 13){
            const todo = {
                caption: this.state.caption,
            }
            this.setState({
                caption:''
            });
            //Action
    
            if(todo.caption ===''){
                alert('Empty field cannot be added');
            }
            else
            this.props.addTodoAsync(todo);
        }
    }

    

    render() {
        return (
            <div>
                
                    <div>
                        <input type="text" name="addTodo" className="addTodo" onChange={this.onChange} onKeyDown={this.keyPress} value={this.state.caption} placeholder="Whats Up!"></input> 
                    </div>
                    

             
            </div>
        )
    }
}

AddTodo.propTypes = {
    createPost : PropTypes.func.isRequired
}

export default connect(null, { addTodoAsync })(AddTodo)
