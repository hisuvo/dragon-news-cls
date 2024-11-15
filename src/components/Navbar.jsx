import { Link, NavLink } from "react-router-dom";
import userLogo from "../assets/user.png"
import { IoPersonCircleOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export default function Navbar() {
  const {user} = useContext(AuthContext)
  return (
    <div className="flex justify-between items-center">
        <div className="logo">
          <Link to='/' className="text-xl font-semibold">{user && user.name}</Link>
        </div>
        <div className="nav space-x-3">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
        </div>
        <div className="flex gap-2 items-center">
            <div className="">
                <Link to={'/auth/register'} className="text-5xl"><IoPersonCircleOutline/></Link>
            </div>
            <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
        </div>
    </div>
  )
}
