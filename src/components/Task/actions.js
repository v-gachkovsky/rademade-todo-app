import { createAction } from '../../utils/reduxHelpers';
import {
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE
} from './actionTypes';

export const updateTask = createAction(UPDATE_TASK_REQUEST);
export const updateTaskSuccess = createAction(UPDATE_TASK_SUCCESS);
export const updateTaskFailure = createAction(UPDATE_TASK_FAILURE);

export const deleteTask = createAction(DELETE_TASK_REQUEST);
export const deleteTaskSuccess = createAction(DELETE_TASK_SUCCESS);
export const deleteTaskFailure = createAction(DELETE_TASK_FAILURE);
