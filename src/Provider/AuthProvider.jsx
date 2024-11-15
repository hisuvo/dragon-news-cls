import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase/fitebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    console.log(user);
    

    const createNewUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        setUser,
        createNewUser
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (createUser) => {
        setUser(createUser)
      })
      return ()=> {
        unSubscribe();
      }
    },[])

  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
}