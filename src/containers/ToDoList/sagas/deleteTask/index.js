import { fork, takeLatest } from 'redux-saga/effects';
import { DELETE_TASK_REQUEST } from '../../actionTypes';
import deleteTask from './deleteTask';

export default function* watchDeleteTasks() {
  yield fork(takeLatest, DELETE_TASK_REQUEST, deleteTask);
}
