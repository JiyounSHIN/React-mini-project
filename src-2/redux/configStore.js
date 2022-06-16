import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import post from '../modules/redux/post';
import comment from '../modules/redux/comment';
import {createBrowserHistory} from 'history';

const customHistory = createBrowserHistory();
const rootReducer = combineReducers({post, comment});
const enhancer = applyMiddleware(
  thunk.withExtraArgument({ history: customHistory }),
)
const store = createStore(rootReducer, enhancer)

export default store;