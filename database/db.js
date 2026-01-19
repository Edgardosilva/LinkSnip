import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

let db;

// Configuración de Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

export function initializeDatabase() {
  try {
    if (!db) {
      const app = initializeApp(firebaseConfig);
      db = getFirestore(app);
      console.log('Conectado a Firebase Firestore');
    }
    return db;
  } catch (error) {
    console.error('Error al conectar a Firebase:', error);
    throw error;
  }
}
