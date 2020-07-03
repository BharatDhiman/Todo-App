import { FETCH_TODOS, NEW_TODO, DEL_TODO, TOG_TODO } from '../actions/types'

const initialState = {
    todos: [],
    todo: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TODOS:
            return {
                ...state,
                todos: action.payload
            };
        case NEW_TODO:
            return {
                 ...state,
                todo: action.payload
            };
        case DEL_TODO:
            return {
                ...state,
                todos: action.payload
            };
        case TOG_TODO:
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state;
    }
}