import { takeEvery, put, call, take, takeLatest } from 'redux-saga/effects';
import { FETCH_TODOS_ASYNC, ADD_TODO_ASYNC, DEL_TODO_ASYNC, TOG_TODO_ASYNC } from '../actions/types';
import { fetchTodosFunction, addTodoFunction, delTodoFunction, toggleTodoFunction } from '../api';

import { fetchTodos, addTodo, delTodo, toggleTodo } from '../actions/todoActions';



function* fetchTodoAsync(){
    const todos = yield call(fetchTodosFunction);
    yield put(fetchTodos(todos));
  
}


function* addTodoAsync(addAction){
    const todo = yield call(addTodoFunction, addAction.todoItem);
    yield put(addTodo(todo));
}

function* delTodoAsync(delAction){
    const todos = yield call(delTodoFunction, delAction.index);
    yield put(delTodo(todos));
}

function* togTodoAsync(togAction){
    const todos = yield call(toggleTodoFunction, togAction.index);
    yield put(toggleTodo(todos));
}

export default function* watchTodo(){
    yield takeEvery(FETCH_TODOS_ASYNC, fetchTodoAsync);
   
    const addAction = yield takeLatest(ADD_TODO_ASYNC, addTodoAsync);

    const delAction = yield takeLatest(DEL_TODO_ASYNC, delTodoAsync);

    const togAction = yield takeLatest(TOG_TODO_ASYNC, togTodoAsync);
}