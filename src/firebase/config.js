import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'




const firebaseConfig = {
    apiKey: "AIzaSyA6EszRWUkWT4NBgdc5TcbRXD7PDK-XrDE",
    authDomain: "readinglist-81f2c.firebaseapp.com",
    projectId: "readinglist-81f2c",
    storageBucket: "readinglist-81f2c.appspot.com",
    messagingSenderId: "717975343839",
    appId: "1:717975343839:web:818ba51268da942c4d8f6a"
  };


  initializeApp(firebaseConfig)

  const db = getFirestore()

  const auth = getAuth()

  export {db, auth}