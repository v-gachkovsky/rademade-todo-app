import { call, put } from 'redux-saga/effects';
import rsf from '../../../../firebase';
import { deleteTaskSuccess, deleteTaskFailure } from '../../actions';

const status = { isError: true, message: "Can't delete task. Please try again later" };

export default function * deletingTasks(action) {
  const { payload: id } = action;
  try {
    yield call(rsf.database.delete, `/tasks/${id}`);

    yield put(deleteTaskSuccess(id));
  } catch (error) {
    yield put(deleteTaskFailure(null, status));
  }
}
