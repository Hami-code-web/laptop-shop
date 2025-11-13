import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCKvxXL2WORjlNU8dtWJeZA6Ml4jHxzdIA',
  authDomain: 'e-book-shop-5d85f.firebaseapp.com',
  projectId: 'e-book-shop-5d85f',
  storageBucket: 'e-book-shop-5d85f.firebasestorage.app',
  messagingSenderId: '1082517004989',
  appId: '1:1082517004989:web:99a064675b54389cd7cdd4',
  measurementId: 'G-JG4MDWS0XP',
};
export const google = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
