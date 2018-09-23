import mockedStateData from '../mockedStateData';
import { initialState as state } from '../containers/ToDoList/reducer';

export function get(url) {
  const resource = url.substring(1); // Drop the beginning slash

  return new Promise(resolve => {
    setTimeout(
      resolve,
      Math.floor(Math.random() * (3000 - 500 + 1)) + 500,
      { data: mockedStateData[resource] }
    );
  });
}

export function post(url, entity) {
  const resource = url.substring(1); // Drop the beginning slash

  return new Promise(resolve => {
    setTimeout(
      resolve,
      Math.floor(Math.random() * (3000 - 500 + 1)) + 500,
      { data: [ ...state[resource], entity ] }
    );
  });
}