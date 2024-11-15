import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loadin from "../pages/Loadin";


export default function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext)
    if(loading) {
       return <Loadin/>
    }
    if(user && user?.email) {
        return children
    }
    return <Navigate to={`/auth/login`}></Navigate>;
}
