import { call, put } from 'redux-saga/effects';
import rsf from '../../../../firebase';
import { fetchTasks, createTaskSuccess, createTaskFailure } from '../../actions';

const status = { isError: true, message: "Can't create task. Please try again later" };

export default function* creatingTask(action) {
  const { payload: title } = action;

  const dataForNewTask = {
    title,
    status: false,
    date: Date.now()
  };

  try {
    const id = yield call(rsf.database.create, 'tasks', dataForNewTask);

    if (!id) {
      yield put(createTaskFailure(null, status));
      return;
    }

    const newTask = {
      id,
      ...dataForNewTask
    };

    yield put(createTaskSuccess(newTask));

    yield put(fetchTasks());
  } catch (error) {
    yield put(createTaskFailure(null, status));
  }
}
