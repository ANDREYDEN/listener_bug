import { initializeApp } from 'firebase/app'
import { collection, connectFirestoreEmulator, getFirestore, onSnapshot, query, where } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB0bmIdN6iPlOyKQKTAtyzXFxKi5PhqL6Q",
  authDomain: "flutter-playground-145.firebaseapp.com",
  projectId: "flutter-playground-145",
  storageBucket: "flutter-playground-145.appspot.com",
  messagingSenderId: "154132036526",
  appId: "1:154132036526:web:2c77d2a272087ce234263f"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
connectFirestoreEmulator(db, 'localhost', 8080)

const itemsRef = collection(db, 'items')

const q1 = query(itemsRef, where('tags', 'array-contains', 'foo'))
onSnapshot(q1, (snapshot) => {
  console.log(`Got items from query 1: ${snapshot.docs.length}`)
})

onSnapshot(itemsRef, (snapshot) => {
  console.log(`Got items from query 2: ${snapshot.docs.length}`)
})