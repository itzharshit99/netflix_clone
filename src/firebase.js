// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";
//import { password } from "pg/lib/defaults";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.firebase_api_key,
  authDomain: "netflix-clone-baf1f.firebaseapp.com",
  projectId: "netflix-clone-baf1f",
  storageBucket: "netflix-clone-baf1f.appspot.com",
  messagingSenderId: "385960728196",
  appId: "1:385960728196:web:e73fbbebdd6a3c8deb94d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name,email,password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth,email,password);
    const user = res.user;
    await addDoc(collection(db,"user"),{
      uid:user.uid,
      name,
      authProvider:"local",
      email,
    })
    
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
    
  }
}
const login = async (email,password)=>{
  try {
    await signInWithEmailAndPassword(auth,email,password)
    
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
    
  }
}

const logout = ()=>{
  signOut(auth)
}
export {auth,db,login,signup,logout}