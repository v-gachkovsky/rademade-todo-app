// import firebase from 'firebase';
// import config from '../config';
import initialState from '../mockedStateData';

// const app = firebase.initializeApp(config);
// const db = this.app.database().ref().child('tasks');

export function get(url) {
  const resource = url.substring(1); // Drop the beginning slash

  return new Promise(resolve => {
    setTimeout(
      resolve,
      Math.floor(Math.random() * (3000 - 500 + 1)) + 500,
      { data: initialState[resource] }
    );
  });
}
