import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  name: "fooco-backend",
  apiKey: "AIzaSyAl96WMP6oILdGGkQ8vI7xy4pBsAv5lmL8",
  authDomain: "fooco-backend.firebaseapp.com",
  projectId: "fooco-backend",
  storageBucket: "fooco-backend.appspot.com",
  messagingSenderId: "973730296249",
  appId: "1:973730296249:web:1032f3aa899190a1f74668",
  measurementId: "G-5VCZR0YNM5",
}

const app = initializeApp(firebaseConfig)

export const storage = getStorage(app)

export default app
