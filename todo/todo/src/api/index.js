const fetchTodosFunction = async() => {
    try{
        const response = await fetch('http://localhost:5000/fetchTodos');
    const data = await response.json();
   
    return data.list;
    }
    catch(err){
        console.log(err);
    }
}


const addTodoFunction = async(todoItem) => {
    const response = await fetch('http://localhost:5000/addTodo',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({data:todoItem})           
    });
    const data =await response.json();
    return data.newTodoAdded;
}

const delTodoFunction = async(index) => {
    const response = await fetch('http://localhost:5000/delTodo',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({id:index})           
    });
    const data = await response.json();
    return data.list;
}


const toggleTodoFunction = async(index) =>{
    const response = await fetch('http://localhost:5000/togTodo',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({id:index})           
    });

    const data = await response.json();
    return data.toggledTodo;
}
export { fetchTodosFunction, addTodoFunction, delTodoFunction, toggleTodoFunction }