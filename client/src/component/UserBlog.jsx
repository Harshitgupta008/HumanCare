import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";

const UserBlog = () => {
    const [lock, setLock] = useState(false);
    const {subpage} = useParams();
    
    useEffect(() => {
        if (subpage === "DoctotID") {
            setLock(true);
        } else if (subpage === "PatientID") {
            setLock(true);
        }

    }, [subpage])
    return (
        <>
            {
                lock ?
                    <div className="flex  flex-col items-center h-fit px-4 py-8 mt-2 bg-white w-full">
                        <h1 className="text-center text-red-500 font-bold text-xl sm:text-2xl md:text-4xl px-4">Your <span className="text-black">Blog</span></h1>
                        <hr className="bg-slate-800  w-full mb-2 mt-4" />
                    </div>
                    :
                    <ErrorPage />
            }

        </>
    )
}
export default UserBlog;