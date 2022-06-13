import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import userM from "./modules/userM";
import postM from "./modules/postM";

const rootReducer = combineReducers({userM, postM});

// 적용할 미들웨어 묶음 [배열표시]
const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;

