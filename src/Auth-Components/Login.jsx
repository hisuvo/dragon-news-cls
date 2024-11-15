import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const {logIn} = useContext(AuthContext)


  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then(result => {
        const user = result.user
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)
        alert(errorMessage)
      })
    
  }

  return <div className="flex justify-center items-center p-10">
    <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none">
        <h2 className="text-2xl font-semibold text-center pt-8">Login your account</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
      </form>

      <button 
        className="absolute right-12 bottom-[13.5rem]"
        onClick={()=> setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash/> : <FaEye/>}
      </button>

      <h2 className="text-center font-semibold pb-8">Dont’t Have An Account ? <Link className="text-red-600" to={'/auth/register'}>Register</Link> </h2>
    </div>
  </div>;
}
