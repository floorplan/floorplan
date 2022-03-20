import { getApps, initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

let app, auth, db, analytics;

if (!getApps().length) {
  const firebaseConfig = {
    // TODO: Make sure these are your values
    apiKey: "AIzaSyDlEzcJeNnGD1L3TmJGbylsFQd7dmmaA8g",
    authDomain: "floorplan-codesagas.firebaseapp.com",
    projectId: "floorplan-codesagas",
    storageBucket: "floorplan-codesagas.appspot.com",
    messagingSenderId: "1074198964881",
    appId: "1:1074198964881:web:742e3a37f0307080f42d30",
    measurementId: "G-FD3XK663C0",
  };
  app = initializeApp(firebaseConfig);
  auth = getAuth();
  db = getFirestore();
  if (typeof document !== "undefined") {
    analytics = getAnalytics();
  }
  if (process.env.NODE_ENV === "development") {
    connectFirestoreEmulator(db, "localhost", 8080);
    connectAuthEmulator(auth, "http://localhost:9099");
  }
}

export {
  app,
  auth,
  db,
  analytics,
  getAuth,
  getFirestore,
  getAnalytics,
  logEvent,
};
