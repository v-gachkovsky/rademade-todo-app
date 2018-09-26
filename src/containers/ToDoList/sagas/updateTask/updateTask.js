import { call, put } from 'redux-saga/effects';
import rsf from '../../../../firebase';
import { updateTaskSuccess, updateTaskFailure } from '../../actions';

const status = { isError: true, message: "Can't update task. Please try again later" };

export default function * updatingTasks(action) {
  const { payload: { id, updateObject } }  = action;

  try {
    yield call(rsf.database.update, `/tasks/${id}`, updateObject);

    yield put(updateTaskSuccess({ id, ...updateObject}));
  } catch (error) {
    yield put(updateTaskFailure(null, status));
  }
}
