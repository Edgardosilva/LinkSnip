import { initializeDatabase } from '../database/db.js';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const createURL = async (longUrl, shortUrl) => {
  const db = initializeDatabase();
  const urlsCollection = collection(db, 'urls');
  await addDoc(urlsCollection, {
    longUrl,
    shortUrl,
    createdAt: new Date()
  });
};

export const getURL = async (shortUrl) => {
  try {
    const db = initializeDatabase();
    const urlsCollection = collection(db, 'urls');
    const q = query(urlsCollection, where('shortUrl', '==', shortUrl));
    const querySnapshot = await getDocs(q);
    
    const results = [];
    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });
    
    return results;
  } catch (error) {
    console.error('Error al acceder a la base de datos:', error);
    throw error;
  }
};