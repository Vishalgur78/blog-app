import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCTshsW8dOlK8JxHdV0zfsmv86PUfCL9i8",
    authDomain: "react-project-c16e0.firebaseapp.com",
    projectId: "react-project-c16e0",
    storageBucket: "react-project-c16e0.appspot.com",
    messagingSenderId: "255491746814",
    appId: "1:255491746814:web:5176307082bfcc827a2eaf"
  };
  const app=initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const db=getFirestore(app);
  const storage=getStorage(app);

  export {auth,db,storage};