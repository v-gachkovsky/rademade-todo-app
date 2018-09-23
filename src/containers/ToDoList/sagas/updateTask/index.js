import { fork, takeLatest } from 'redux-saga/effects';
import { UPDATE_TASK_REQUEST } from '../../actionTypes';
import updateTask from './updateTask';

export default function* watchUpdateTasks() {
  yield fork(takeLatest, UPDATE_TASK_REQUEST, updateTask);
}
