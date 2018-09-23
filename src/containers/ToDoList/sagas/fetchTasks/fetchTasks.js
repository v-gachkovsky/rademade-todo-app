import { call, put } from 'redux-saga/effects';
import rsf from '../../../../firebase';
import { fetchTasksSuccess, fetchTasksFailure } from '../../actions';

const status = { isError: true, message: "Can't load tasks. Please try again later" };

export default function * fetchingTasks() {
  try {
    const tasksObject = yield call(rsf.database.read, '/tasks');

    if (!tasksObject) {
      yield put(fetchTasksSuccess([]));
      return;
    }

    const tasks = Object.keys(tasksObject).map(id => {
      return { id, ...tasksObject[id] };
    });

    yield put(fetchTasksSuccess(tasks));
  } catch (error) {
    yield put(fetchTasksFailure(null, status));
  }
}
