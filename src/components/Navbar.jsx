import { NavLink } from "react-router-dom";
import userLogo from "../assets/user.png"

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
        <div className="logo"></div>
        <div className="nav space-x-3">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
        </div>
        <div className="flex gap-2 items-center">
            <div className="">
                <img src={userLogo} alt="" />
            </div>
            <button className="btn btn-neutral rounded-none">Login</button>
        </div>
    </div>
  )
}
