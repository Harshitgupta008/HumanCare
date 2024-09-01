import { useState } from "react";const getBlog = () => {
    const AllData = localStorage.getItem("blog");
    if (AllData) {
        return JSON.parse(localStorage.getItem("blog"));
    } else {
        return [];
    }
}


const AllBlog = () => {
    const [blogData, setBlogData] = useState(getBlog);
    return (
        <>
            <div className="flex  flex-col items-center h-fit px-4 py-8 mt-2 bg-white w-full gap-5">

                <div className="flex flex-col gap-16 items-center justify-center h-fit w-full">
                    {
                        blogData.map((blog, i) => {
                            return (
                                <div key={i} className="h-fit w-full px-11 py-10 flex flex-col gap-8 rounded-2xl bg-red-100  shadow-lg">
                                    <h1> <span className="text-lg font-bold">Name :</span> {blog.name}</h1>
                                    <h1 className=" font-bold"><span className="text-xl">Title : </span> <span className="text-red-500">{blog.title}</span></h1>
                                    <h1 className="text-gray-500">
                                        {blog.blog}
                                    </h1>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </>
    )
}
export default AllBlog;