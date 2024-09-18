import { useState } from "react";
import defaultImage from "../../img/defaultDp.jpg"
const doctorData = [
    { name: "User1" },
    { name: "User2" },
    { name: "User3" },
    { name: "User4" },
    { name: "User5" },
    { name: "User6" },
    { name: "User7" },
    { name: "User8" },
    { name: "User9" },
    { name: "User10" },
    { name: "User11" },
    { name: "User12" },
    { name: "User13" },
    { name: "User14" },
    { name: "User15" },
    { name: "User16" },
    { name: "User17" },
    { name: "User18" },
    { name: "User19" },
    { name: "User20" },

]
const ImageSlider = () => {
    const [data, setData] = useState(doctorData)
    return (
        <>
            <div className="py-8  bg-white">
                <div className="relative  w-full h-fit py-5">
                    <div className="hiddenoverfolw h-36 scroll-smooth w-full px-5 flex gap-6 items-center overflow-auto">
                        {
                            data.map((doc, i) => {
                                return <div className="w-fit h-fit p-2 flex flex-col gap-3 justify-center items-center cursor-pointer text-red-500 hover:text-black" key={i}>
                                    <img src={defaultImage} alt="" className="h-16 min-w-16   md:h-20 md:min-w-20 lg:h-24 lg:min-w-24 rounded-full  hover:shadow-2xl" />
                                    <h1 className="text-sm font-bold  ">{doc.name}</h1>
                                </div>
                            })
                        }

                    </div>
                    <div className="absolute top-14 left-4 bg-black opacity-60 text-white hover:bg-white hover:text-black p-1 md:p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                        </svg>
                    </div>
                    <div className="absolute top-14 right-4  bg-black opacity-60 text-white hover:bg-white hover:text-black p-1 md:p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>

                </div>
            </div>
        </>
    )
}
export default ImageSlider;