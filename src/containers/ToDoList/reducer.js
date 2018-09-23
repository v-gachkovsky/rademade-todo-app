import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE
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

    case FETCH_TASKS_FAILURE:
    case CREATE_TASK_FAILURE:
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
