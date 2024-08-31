import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASSrPzgTivU7YrSaFKBF-3fq8LAF3mbHo",
  authDomain: "sultanwebapp-573f2.firebaseapp.com",
  projectId: "sultanwebapp-573f2",
  storageBucket: "sultanwebapp-573f2.appspot.com",
  messagingSenderId: "479381336316",
  appId: "1:479381336316:web:c407c105c5c1e336386779",
  measurementId: "G-23RD90FM6Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
