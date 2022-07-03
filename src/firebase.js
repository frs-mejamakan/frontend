import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB2f2IwKcgZoUA0tv7nI08vzmlFnt6cTLw',
  authDomain: 'mejamakan-d2d88.firebaseapp.com',
  databaseURL:
    'https://mejamakan-d2d88-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'mejamakan-d2d88',
  storageBucket: 'mejamakan-d2d88.appspot.com',
  messagingSenderId: '465714267973',
  appId: '1:465714267973:web:4e474ceef43fc3c9bb602c',
  measurementId: 'G-XNZDF7ZZ90',
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
