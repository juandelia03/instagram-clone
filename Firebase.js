import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwDpVZcghd1euHGzXflFHNDgHE-Q-cDCI",
  authDomain: "instagram-b628b.firebaseapp.com",
  projectId: "instagram-b628b",
  storageBucket: "instagram-b628b.appspot.com",
  messagingSenderId: "793865361373",
  appId: "1:793865361373:web:8c0f175b2c862fee530834",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const firestore = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });
export const db = getFirestore(app, {
  experimentalForceLongPolling: true,
});
// export const db = getFirestore(app, {
//   experimentalForceLongPolling: true,
// });
