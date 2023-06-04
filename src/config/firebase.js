import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/productsSlice";

const firebaseConfig = {
  apiKey: "AIzaSyB0mIwTMubFa9OrE5Puq7sgmYpPSah8nys",
  authDomain: "strong-augury-367920.firebaseapp.com",
  projectId: "strong-augury-367920",
  storageBucket: "strong-augury-367920.appspot.com",
  messagingSenderId: "206331944324",
  appId: "1:206331944324:web:6804ebcd439272b51211d1",
  measurementId: "G-XKHLZFYQHD"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const productsRef = collection(db, "products");

export const useProductsListener = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return onSnapshot(productsRef, (snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data, createdAt: data.createdAt?.toDate() };
      });

      dispatch(setProducts(docs));
    });
  }, [dispatch]);
};
