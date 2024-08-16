import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [optation, setOptation] = useState("");
    const handleSection = (e) => {
        setOptation(e.target.value)
    }
    const LoginUser = (e) => {
        e.preventDefault();
        // if (!optation) {
        //     return console.log("select type")
        // } else if (optation === "Doctor") {
        //     return console.log("Hello Doctor")
        // } else if (optation === "Patient") {
        //     return console.log("Welcome Patient")
        // }
    }
    return (
        <>
            <div className="flex justify-center flex-col items-center h-fit px-4 py-8 mt-2 bg-white w-full">
                <h1 className="text-center text-red-500 font-bold text-xl sm:text-2xl md:text-4xl px-4">Login <span className="text-black">User</span></h1>
                <hr className="bg-slate-800  w-full mb-2 mt-4" />
                <form className="flex flex-col gap-4 px-1 py-14 w-80 md:w-96">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-red-500 font-bold px-3 py-1">Email</label>
                        <input type="text" id="email" placeholder="Enter your valid email" className="h-12 px-4 py-5 border-gray-400 border-2 rounded-full w-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-red-500 font-bold px-3 py-1">Password</label>
                        <input type="text" id="password" placeholder="Enter your password" className="h-12 px-4 py-5 border-gray-400 border-2 rounded-full w-full" />
                    </div>
                    <div className="flex flex-col gap-1  mb-3">
                        <label htmlFor="UserType" className="text-red-500 font-bold px-3 py-1"> {!optation ? "Select type*" : optation}</label>
                        <select name="UserType" onChange={handleSection} id="UserType" className="text-red-500 outline-none rounded-full border-2 border-gray-400 px-4 py-3">
                            <option value="" defaultChecked>Choose Login Type</option>
                            <option value="Doctor">I'm Doctor</option>
                            <option value="Patient">I'm Patient</option>
                        </select>
                    </div>
                    <button onClick={LoginUser} className=" h-fit w-full  py-3 rounded-full bg-red-500 text-white hover:bg-red-700">Login</button>
                    <div className="flex flex-row items-center justify-between px-1"><Link to={"/register"} className="hover:text-red-500">Don't have Account</Link >  <Link className="hover:text-red-500">forget pawwsord ?</Link ></div>
                </form>
            </div>
        </>
    )
}
export default Login;