import { fork } from 'redux-saga/effects';
import ToDoList from './containers/ToDoList/sagas';

export default function * rootSaga() {
  yield fork(ToDoList);
}
