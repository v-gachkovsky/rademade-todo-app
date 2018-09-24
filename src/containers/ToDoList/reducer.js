import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,

  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,

  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,

  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE
} from './actionTypes';

export const initialState = {
  tasks: [],
  loading: false,
  status: null
};

function reducer(state = initialState, action) {
  const { type, payload, status } = action;

  switch (type) {
    case FETCH_TASKS_REQUEST:
    case CREATE_TASK_REQUEST:
    case UPDATE_TASK_REQUEST:
    case DELETE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
        status: null
      };

    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: payload,
        loading: false,
        status: null
      };

    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: [ ...state.tasks, payload ],
        loading: false,
        status: null
      };

    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === payload.id
          ? payload
          : task
        ),
        loading: false,
        status: null
      };

    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== payload),
        loading: false,
        status: null
      };

    case FETCH_TASKS_FAILURE:
    case CREATE_TASK_FAILURE:
    case UPDATE_TASK_FAILURE:
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        status
      };

    default:
      return state;
  }
}

export default reducer;
