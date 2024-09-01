import { useState } from "react";
import { Useauth } from "../../Auth";
import AddReview from "../AddReview";
import defaultImage from "../../img/harshit.jpg"

const GetStorage = () => {
    const AllReview = localStorage.getItem("review");
    if (AllReview) {
        return JSON.parse(localStorage.getItem("review"));
    } else {
        return [];
    }
}
const Review = () => {
    const { loggedDoctor, loggedpatient } = Useauth();
    const [reviewData, setReviewData] = useState(GetStorage);
    return (
        <>
            <div className="flex  flex-col items-center h-fit px-4 py-8 mt-2 bg-white w-full">

                {
                    loggedDoctor || loggedpatient ? <AddReview /> : ""
                }
                <h1 className="text-center text-red-500 font-bold text-xl sm:text-2xl md:text-4xl px-4 mt-10">All <span className="text-black">Reviews</span></h1>
                <hr className="bg-slate-800  w-full mb-2 mt-4" />
                {
                    reviewData.map((reviews, i) => {
                        return (
                            <>

                                <div key={i} className="h-fit w-full px-11 py-10 flex mt-5 flex-col gap-3 rounded-2xl border-2 border-gray-400 shadow-sm">
                                    <div className="w-fit h-fit flex justify-center items-center  gap-3 ">
                                        <img src={defaultImage} alt="" className="h-16 w-16 rounded-full"/>
                                        <h1 className="font-bold"> {reviews.name}</h1>
                                    </div>
                                    <hr className="bg-slate-800  w-full mb-2 mt-4" />
                                    <h1 className="text-gray-500 font-bold px-2">
                                        {reviews.review}
                                    </h1>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Review;