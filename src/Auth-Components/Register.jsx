import React, { useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false)

    const {setUser, createNewUser} = useContext(AuthContext)
    
   
    const handleSubmite = e => {
        e.preventDefault();
        const form = new FormData(e.target)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        // console.log({name, photo, email, password})

        createNewUser(email, password)
        .then(result => {
            const user = result.user;
            setUser(user)
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        })
    }


  return <div className="flex justify-center items-center p-10">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none relative">
            <h2 className="text-2xl font-semibold text-center pt-8">Register your account</h2>
            
            <form onSubmit={handleSubmite} className="card-body">
            <div className="form-control">
                <label className="label">
                <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
            </div>

            <div className="form-control">
                <label className="label">
                <span className="label-text">Photo Url</span>
                </label>
                <input type="url" name="photo" placeholder="photo url" className="input input-bordered" required />
            </div>

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
                <input type= {showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                <label className="label justify-start gap-4 cursor-pointer mt-4">
                    <input type="checkbox" defaultChecked className="checkbox" />
                    <span className="label-text">Accept Term & Conditions</span>
                </label>
            </div>

            <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">Register</button>
            </div>
            </form>

            <button 
             className="absolute right-12 bottom-[15rem]"
             onClick={()=> setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash/> : <FaEye/>}
            </button>

            <h2 className="text-center font-semibold pb-8">Already Have An Account ? <Link className="text-red-600" to={'/auth/login'}>Login</Link> </h2>
        </div>
    </div>;
}
