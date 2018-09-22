import { combineReducers } from 'redux';
import toDoListReducer from './containers/ToDoList/reducer';

export default combineReducers({
  ToDoList: toDoListReducer
});