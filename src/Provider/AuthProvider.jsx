import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/fitebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(loading, user)

    const createNewUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
      setLoading(true);
      return signOut(auth)
    }

    const logIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        logIn,
        loading
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (createUser) => {
        setUser(createUser)
        setLoading(false)
      })
      return ()=> {
        unSubscribe();
      }
    },[])

  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
}
