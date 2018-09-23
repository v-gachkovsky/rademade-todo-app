import { fork, takeLatest } from 'redux-saga/effects';
import { FETCH_TASKS_REQUEST } from '../../actionTypes';
import fetchTasks from './fetchTasks';

export default function* watchFetchTasks() {
  yield fork(takeLatest, FETCH_TASKS_REQUEST, fetchTasks);
}
