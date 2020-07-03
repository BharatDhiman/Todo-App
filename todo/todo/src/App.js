import React, { Component } from 'react'
import Todo from './components/todo';
import { Provider } from 'react-redux';
import AddTodo from './components/addTodo';



import configuration from './store'
import './App.css'

const store = configuration();

export class App_2 extends Component {
   
    render() {
        return (
          <Provider store={store}>
                <div className="container"> 
                    <h1>todos</h1>
                    <AddTodo/>
                <Todo />
            </div>
            </Provider>
           
        )
    }
}

export default App_2
