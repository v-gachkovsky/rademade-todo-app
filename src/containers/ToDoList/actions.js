import { createAction } from '../../utils/reduxHelpers';
import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,

  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,

  DELETE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,

  UPDATE_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS
} from './actionTypes';


export const fetchTasks = createAction(FETCH_TASKS_REQUEST);
export const fetchTasksSuccess = createAction(FETCH_TASKS_SUCCESS);
export const fetchTasksFailure = createAction(FETCH_TASKS_FAILURE);

export const createTask = createAction(CREATE_TASK_REQUEST);
export const createTaskSuccess = createAction(CREATE_TASK_SUCCESS);
export const createTaskFailure = createAction(CREATE_TASK_FAILURE);

export const updateTask = createAction(UPDATE_TASK_REQUEST);
export const updateTaskSuccess = createAction(UPDATE_TASK_SUCCESS);
export const updateTaskFailure = createAction(UPDATE_TASK_FAILURE);

export const deleteTask = createAction(DELETE_TASK_REQUEST);
export const deleteTaskSuccess = createAction(DELETE_TASK_SUCCESS);
export const deleteTaskFailure = createAction(DELETE_TASK_FAILURE);
