import { combineReducers } from 'redux';
import todosReducer from '../features/todos/todosSlice';
import homeReducer from '../features/Home/homeSlice';

export default combineReducers({
  todos: todosReducer,
  home: homeReducer,
});
