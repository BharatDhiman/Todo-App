import { FETCH_TODOS, NEW_TODO, DEL_TODO, TOG_TODO, FETCH_TODOS_ASYNC, ADD_TODO_ASYNC, DEL_TODO_ASYNC, TOG_TODO_ASYNC } from './types'




export const fetchTodosAsync = () => ({
    type: FETCH_TODOS_ASYNC,
});

export const fetchTodos  = (todos) =>({
    type: FETCH_TODOS,
    payload: todos
});


export const addTodoAsync = (todoItem) => ({
    type: ADD_TODO_ASYNC,
    todoItem
})

export const addTodo = (todo) => ({

    type: NEW_TODO,
    payload: todo
})

export const delTodoAsync = (index) => ({
    type: DEL_TODO_ASYNC,
    index
})

export const delTodo = (todos) => ({
    type: DEL_TODO,
    payload: todos
})

export const toggleTodoAsync = (index) => ({
    type: TOG_TODO_ASYNC,
    index
})

export const toggleTodo = (todos) => ({
    type: TOG_TODO,
    payload: todos
})



