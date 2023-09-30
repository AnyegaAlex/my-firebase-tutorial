import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCFOhduLfv8nXN9z6Yl-JCcZgjgWHtbmdU",
  authDomain: "my-firebase-tutorial-72385.firebaseapp.com",
  projectId: "my-firebase-tutorial-72385",
  storageBucket: "my-firebase-tutorial-72385.appspot.com",
  messagingSenderId: "764413835245",
  appId: "1:764413835245:web:fcac784ccf0a6de42699e4"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'books')

// get collection data
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })