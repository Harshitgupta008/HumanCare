import { useEffect, useState } from "react";
const getBlog = () => {
    const AllData = localStorage.getItem("blog");
    if (AllData) {
        return JSON.parse(localStorage.getItem("blog"));
    } else {
        return [];
    }
}

const AddBlog = () => {
    const [user, setUser] = useState({
        name: "", title: "", blog: ""
    })
    const [data, setData] = useState(getBlog)
    const HandleInput = (e) => {
        const { name, value } = e.target;
        setUser((prev)=>({ ...prev, [name]: value }));
        // console.log(data)
    }
    const SubmitBlog = (e) => {
        e.preventDefault();
        const { name, title, blog } = user;
        if (!name || !title || !blog) {
            return window.alert("All field are required")
        }
        setData([...data,user]);
        window.alert("Your blog are submitted")
        setUser({ name: "", title: "", blog: "" });
    }
    useEffect(()=>{
        localStorage.setItem("blog",JSON.stringify(data));
    },[data]);

    return (
        <div className="flex  flex-col items-center py-10 h-fit px-4  mt-2 bg-white w-full">
            <h1 className="text-center text-red-500 font-bold text-xl sm:text-2xl md:text-4xl px-4">Create <span className="text-black">Blog</span> ✍🏻</h1>
            <hr className="bg-slate-800  w-full mb-2 mt-4" />

            <div className="h-fit flex flex-col justify-center items-center lg:px-48 md:px-36 sm:px-14 px-5 sm:rounded-2xl py-5  sm:shadow-2xl">
                <form className="flex flex-col gap-4 px-1 py-11 h-fit  w-80 md:w-96 ">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-red-500 font-bold px-3 py-1">Name*</label>
                        <input type="text" id="name" placeholder="Enter your Name" className="h-12 px-4 py-5 border-gray-400 border-2 rounded-lg w-full" name="name" value={user.name} onChange={HandleInput} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="title" className="text-red-500 font-bold px-3 py-1">Title*</label>
                        <h1 className=" px-3 text-sm text-gray-500">Enter title according Blog</h1>
                        <input type="text" id="title" placeholder="Enter your Title" className="h-12 px-4 py-5 border-gray-400 border-2 rounded-lg w-full" name="title" value={user.title} onChange={HandleInput} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="blog" className="text-red-500 font-bold px-3 py-1">Blog*</label>
                        <h1 className=" px-3 text-sm text-gray-500">Create your blog</h1>
                        <textarea id="blog" placeholder="Enter your Blog" className="h-44 px-4 py-5 border-gray-400 border-2 rounded-lg w-full" name="blog" value={user.blog} onChange={HandleInput} />
                    </div>
                    <button onClick={SubmitBlog} className="w-full h-fit bg-red-500 rounded-full py-2 text-white mt-2 hover:bg-red-700">Add Blog</button>
                </form>
            </div>
        </div>
    )
}
export default AddBlog;