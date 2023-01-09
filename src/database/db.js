import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDazGQLN069clJ0lZqPvgs8f8ZowqbBev8",
  authDomain: "portfolio-b3570.firebaseapp.com",
  projectId: "portfolio-b3570",
  storageBucket: "portfolio-b3570.appspot.com",
  messagingSenderId: "669581646452",
  appId: "1:669581646452:web:7c08e44e3fc556e856cf21",
  measurementId: "G-TGVXYB4FZT"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export const projetosCollectionRef = collection(db, 'projetos')
