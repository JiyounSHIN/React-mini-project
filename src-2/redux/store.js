import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk"
import post from './modules/post';
import comment from './modules/comment';
import {createBrowserHistory} from"history";

export const history = createBrowserHistory();

const middlewares = [thunk]

const rootReducer = combineReducers({post, comment});

const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;