import { fork } from 'redux-saga/effects';
import fetchTasks from './fetchTasks';
import createTask from './createTask';
import updateTask from './updateTask';
import deleteTask from './deleteTask';

export default function* tasksSaga() {
  yield fork(fetchTasks);
  yield fork(createTask);
  yield fork(updateTask);
  yield fork(deleteTask);
}
