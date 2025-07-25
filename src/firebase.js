import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDtaiDkvqXzJsgG9xmOqRZXXl73GgPV_-8",
  authDomain: "netfilx-clone-32dd6.firebaseapp.com",
  projectId: "netfilx-clone-32dd6",
  storageBucket: "netfilx-clone-32dd6.firebasestorage.app",
  messagingSenderId: "119452688154",
  appId: "1:119452688154:web:05c8ec819f1eaaf8c456a3",
  measurementId: "G-M0M0JXN2EB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name,email,password)=>{
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await addDoc(collection(db,'user'),{
      uid:user.uid,
      name,
      authProvider:'local',
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
}

const login = async (email,password)=>{
  try {
    await signInWithEmailAndPassword(auth,email,password);
  } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
}

const logOut = async ()=>{
  signOut(auth);
}

export {auth,db,login,logOut,signUp};