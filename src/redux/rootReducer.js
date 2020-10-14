import {combineReducers} from "redux";
import counterReducer from './reducers/counter.js';

//todo то что мы передаем в combineReducers, по сути, и есть наш store (т.е. функция counter возвращает state)
export default combineReducers({
    counter: counterReducer
})