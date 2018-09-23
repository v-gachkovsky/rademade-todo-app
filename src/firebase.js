import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

// In real app I'd hide credentials to env vars :)
const config = {
  apiKey: "AIzaSyA73LbuiIfI9L8xlyLq6RvU2x8HKV04rXw",
  authDomain: "rademade-todo.firebaseapp.com",
  databaseURL: "https://rademade-todo.firebaseio.com",
  projectId: "rademade-todo",
  storageBucket: "rademade-todo.appspot.com",
  messagingSenderId: "326632929122"
};

const firebaseApp = firebase.initializeApp(config);
const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp);

export default reduxSagaFirebase;
