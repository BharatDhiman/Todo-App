/*export const fetchTodos = () => dispatch =>{

    
        fetch('http://localhost:5000/fetchTodos')
        .then(res => res.json())
        .then(todos =>{
            var arr = todos.list;
            dispatch({
            type: FETCH_TODOS,
            payload: arr
        })})
        .catch((err)=>{
            console.log(err)})
       
}




export const newTodo = (todoItem) => dispatch =>{

        fetch('http://localhost:5000/addTodo',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({data:todoItem})           
        })
        .then(res => res.json())
        .then(todo => dispatch({
            type: NEW_TODO,
            payload: todo.newTodoAdded
        }))
        .catch(err => console.log(err));

}

export const delTodo = (todoID) => dispatch =>{

  
    fetch('http://localhost:5000/delTodo',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({id:todoID})           
    })
    .then(res => res.json())
    .then(todos => dispatch({
        type: DEL_TODO,
        payload: todos.list
    }))
    .catch(err => console.log(err));

}

export const toggleTodo = (todoID) => dispatch =>{

  
    fetch('http://localhost:5000/togTodo',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({id:todoID})           
    })
    .then(res => res.json())
    .then(todos => dispatch({
        type: TOG_TODO,
        payload: todos.toggledTodo
    }))
    .catch(err => console.log(err));

}
*/