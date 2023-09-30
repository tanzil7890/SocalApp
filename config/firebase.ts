import { initializeApp } from "firebase/app";
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGEBUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
} from "@env";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHuJ5kY9RuCR0uY641msodxEisbDFdT00",
  authDomain: "event-app-9fd59.firebaseapp.com",
  projectId: "event-app-9fd59",
  storageBucket: "event-app-9fd59.appspot.com",
  messagingSenderId: "495693701387",
  appId: "1:495693701387:web:4a1ffa129b090cfb9d820e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

export { auth, db };
