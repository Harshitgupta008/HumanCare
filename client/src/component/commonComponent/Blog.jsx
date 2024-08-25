import { Link } from "react-router-dom"
import { Useauth } from "../../Auth";
import { useEffect, useState } from "react";
import AllBlog from "../AllBlog";
const Blog = () => {
    const { loggedDoctor, loggedpatient } = Useauth();
    const [id, setId] = useState("");

    useEffect(() => {
        if (loggedDoctor) {
            setId("DoctotID");
        } else if (loggedpatient) {
            setId("PatientID");
        }
    }, [])
    return (
        <>
            <div className="flex  flex-col items-center h-screen px-4 py-8 mt-2 bg-white w-full">
                <h1 className="text-center text-red-500 font-bold text-xl sm:text-2xl md:text-4xl px-4">All <span className="text-black">Blog</span></h1>
                <hr className="bg-slate-800  w-full mb-2 mt-4" />
                {
                    loggedDoctor || loggedpatient ?
                    
                            <div className="w-full h-fit py-3 mt-3 mb-3 flex justify-center gap-5 flex-wrap">
                                <Link to={`/blog/${id}`} className=" w-fit px-5  flex justify-center items-center gap-3 py-2 rounded-full bg-red-500 text-white hover:bg-red-700">
                                    My Blog
                                </Link>
                                <Link to={`/addblog`} className=" w-fit px-4  flex justify-center items-center gap-2 py-2 rounded-full bg-red-500 text-white hover:bg-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    Add New Blog
                                </Link>
                            </div>
                            
                        :
                        " "
                }
                <AllBlog/>


            </div>
        </>
    )
}
export default Blog;