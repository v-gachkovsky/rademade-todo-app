import { fork } from 'redux-saga/effects';
import fetchTasks from './fetchTasks';
import createTask from './createTask';

export default function* tasksSaga() {
  yield fork(fetchTasks);
  yield fork(createTask);
}
