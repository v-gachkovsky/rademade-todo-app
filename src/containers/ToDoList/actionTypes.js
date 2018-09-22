import { NAMESPACE } from '../../constants';
import { addPrefix } from '../../utils/reduxHelpers';

const NS = type => addPrefix(NAMESPACE, type);

export const FETCH_TASKS_REQUEST = NS('FETCH_TASKS_REQUEST');
export const FETCH_TASKS_SUCCESS = NS('FETCH_TASKS_SUCCESS');
export const FETCH_TASKS_FAILURE = NS('FETCH_TASKS_FAILURE');

export const CREATE_TASK_REQUEST = NS('CREATE_TASK_REQUEST');
export const CREATE_TASK_SUCCESS = NS('CREATE_TASK_SUCCESS');
export const CREATE_TASK_FAILURE = NS('CREATE_TASK_FAILURE');
