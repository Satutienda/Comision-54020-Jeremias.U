import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAOm4Z7ec8-H0JohrtTo66itsjIzR9sKs0",
    authDomain: "coder-jeremias.firebaseapp.com",
    projectId: "coder-jeremias",
    storageBucket: "coder-jeremias.appspot.com",
    messagingSenderId: "590364696709",
    appId: "1:590364696709:web:57bffeea67ff8f6d4e49ec"
};


const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)