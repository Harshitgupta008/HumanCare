import { useEffect, useState } from "react";

const GetStorage = ()=>{
    const AllReview = localStorage.getItem("review");
    if(AllReview){
        return JSON.parse(localStorage.getItem("review"));
    }else{
        return [];
    }
}

const AddReview = () => {
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    const [data,setData] = useState(GetStorage);
    const SubmitReview = (e) => {
        e.preventDefault();
        if(!name || !review){
            return window.alert("All field are required")
        }
        setData([...data,{name:name, review : review}]);
        setName("");
        setReview("");
        // console.log(name);
        // console.log(review);
    }
    useEffect(()=>{
        localStorage.setItem("review",JSON.stringify(data));
    },[data])
    return (
        <>
            <form className="flex flex-col gap-4 px-10 py-11 h-fit  w-full  ">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-red-500 font-bold px-3 py-1">Name*</label>
                    <input type="text" id="name" placeholder="Enter your Name" className="h-12 px-4 py-5 border-gray-400 border-2 rounded-lg w-full" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="review" className="text-red-500 font-bold px-3 py-1">Review*</label>
                    <h1 className=" px-3 text-sm text-gray-500">Give us Feedback</h1>
                    <textarea id="review" placeholder="Enter your Review" className="h-24 px-4 py-5 border-gray-400 border-2 rounded-lg w-full" value={review} onChange={(e) => { setReview(e.target.value) }} />
                </div>
                <div className=" flex justify-center items-center">
                    <button onClick={SubmitReview} className="w-fit h-fit bg-red-500 rounded-full px-16 py-3 text-white mt-2 hover:bg-red-700">Give Review</button>
                </div>
            </form>
        </>
    )
}
export default AddReview;