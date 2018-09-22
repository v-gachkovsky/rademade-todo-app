import { NAMESPACE } from '../../constants';
import { addPrefix } from '../../utils/reduxHelpers';

const NS = type => addPrefix(NAMESPACE, type);

export const UPDATE_TASK_REQUEST = NS('UPDATE_TASK_REQUEST');
export const UPDATE_TASK_SUCCESS = NS('UPDATE_TASK_SUCCESS');
export const UPDATE_TASK_FAILURE = NS('UPDATE_TASK_FAILURE');

export const DELETE_TASK_REQUEST = NS('DELETE_TASK_REQUEST');
export const DELETE_TASK_SUCCESS = NS('DELETE_TASK_SUCCESS');
export const DELETE_TASK_FAILURE = NS('DELETE_TASK_FAILURE');
