import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJg30REy9BeypjyguCUCqFzhaflUttRIU",
  authDomain: "netflixgpt-d5fcd.firebaseapp.com",
  projectId: "netflixgpt-d5fcd",
  storageBucket: "netflixgpt-d5fcd.appspot.com",
  messagingSenderId: "380058351283",
  appId: "1:380058351283:web:0ca8ce9d40a47e7935e2c6",
  measurementId: "G-XRBKD6XVPJ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
