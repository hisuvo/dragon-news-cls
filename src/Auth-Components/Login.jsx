import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return <div className="flex justify-center items-center p-10">
    <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none">
        <h2 className="text-2xl font-semibold text-center pt-8">Login your account</h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
      </form>
      <h2 className="text-center font-semibold pb-8">Dont’t Have An Account ? <Link className="text-red-600" to={'/auth/register'}>Register</Link> </h2>
    </div>
  </div>;
}