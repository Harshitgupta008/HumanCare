import { Link } from "react-router-dom";
import defaultDp from "../../img/defaultDp.jpg"
import { useState } from "react";
const Register = () => {
    const [image, setImage] = useState(null);
    const [optation, setOptation] = useState("");
    const HandleImage = (e) => {
        const file = e.target.files[0];
        setImage(file)
    }
    const handleSection = (e) => {
        setOptation(e.target.value)
    }

    const RegisterUser = (e) => {
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
                <h1 className="text-center text-red-500 font-bold text-xl sm:text-2xl md:text-4xl px-4">Register <span className="text-black">User</span></h1>
                <hr className="bg-slate-800  w-full mb-2 mt-4" />
                <form className="flex flex-col gap-4 px-1 py-14 w-80 md:w-96">
                    <div className="flex items-center justify-center">
                        <img src={!image ? defaultDp : URL.createObjectURL(image)} alt="" className="h-28 w-28 rounded-full" />
                    </div>
                    <div className="flex flex-col gap-1 py-3">
                        <label htmlFor="UserType" className="text-red-500 font-bold text-center py-2"> {!optation ? "Select type*" : optation}</label>
                        <select name="UserType" onChange={handleSection} id="UserType" className="text-red-500 outline-none rounded-full border-2 border-gray-400 px-4 py-3">
                            <option value="" defaultChecked>Choose Registration Type</option>
                            <option value="Doctor">I'm Doctor</option>
                            <option value="Patient">I'm Patient</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-red-500 font-bold px-3 py-1">Display picture</h1>
                        <label htmlFor="image" className="text-gray-500 bg-gray-200 font-bold h-12 px-4 py-7 border-gray-400 border-2 rounded-xl w-full flex justify-center items-center">Upload</label>
                        <input type="file" id="image" name="image" className=" hidden" onChange={HandleImage} accept="image/*" />
                    </div>
                    <div className="flex flex-col  gap-1">
                        <label htmlFor="name" className="text-red-500 font-bold px-3 py-1">Name</label>
                        <input type="text" id="name" placeholder="Enter your Name" className="h-12 px-4 py-5 border-gray-400 border-2 rounded-full w-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="number" className="text-red-500 font-bold px-3 py-1">Number</label>
                        <input type="number" id="number" placeholder="Enter your Phone Number" className="h-12 px-4 py-5 border-gray-400 border-2 rounded-full w-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-red-500 font-bold px-3 py-1">Email</label>
                        <input type="email" id="email" placeholder="Enter your valid email" className="h-12 px-4 py-5 border-gray-400 border-2 rounded-full w-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-red-500 font-bold px-3 py-1">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" className="h-12 px-4 py-5 border-gray-400 border-2 rounded-full w-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="cpassword" className="text-red-500 font-bold px-3 py-1">Confirm-Password</label>
                        <input type="password" id="cpassword" placeholder="Enter your password" className="h-12 px-4 py-5 border-gray-400 border-2 rounded-full w-full" />
                    </div>

                    <button onClick={RegisterUser} className=" h-fit w-full  py-3 rounded-full bg-red-500 text-white hover:bg-red-700">Register</button>
                    <div className="flex flex-row items-center justify-center px-1"><Link to={"/login"} className="hover:text-red-500">already have an Account?</Link ></div>
                </form>
            </div>
        </>
    )
}
export default Register;