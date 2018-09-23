import { fork, takeLatest } from 'redux-saga/effects';
import { CREATE_TASK_REQUEST } from '../../actionTypes';
import createTask from './createTask';

export default function* watchCreateTask() {
  yield fork(takeLatest, CREATE_TASK_REQUEST, createTask);
}
