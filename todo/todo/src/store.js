import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/saga';
import rootReducer from './reducers'
const initialState = [];

// const middleware = [thunk];
const configuration = () => {

    const sagaMiddleware = createSagaMiddleware();



const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) );

sagaMiddleware.run(rootSaga);
return store;
}


export default configuration;