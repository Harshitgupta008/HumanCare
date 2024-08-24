import { useState } from "react";
import GalleryData from "./GalleryData";

const Gallery = () => {
    const [data, setData] = useState(GalleryData);
    const handleDate = (category)=>{
        const newData = GalleryData.filter((item,i)=>{
            return item.category === category;
        })
        setData(newData);
    }

    return (
        <>
            <div className="w-full h-fit flex flex-col justify-center items-center gap-3 mt-3 px-4 bg-white py-7">
                <h1 className="text-center text-red-500 font-bold text-xl sm:text-2xl md:text-4xl mt-4">Our Gallery</h1>
                <p className="px-10 py-5 text-center">Explore our state-of-the-art facilities and see the care we provide. Our gallery 
                    showcases the various departments and the compassionate professionals dedicated to your health.l</p>
                <div className="h-fit w-full flex flex-row flex-wrap justify-center items-center gap-4">
                    <button onClick={()=>setData(GalleryData)} className="px-4 h-fit w-fit py-2 bg-red-500 hover:bg-red-700 rounded-2xl text-white">All</button>
                    <button onClick={()=>handleDate("eye")} className="px-4 h-fit w-fit py-2 bg-red-500 hover:bg-red-700 rounded-2xl text-white">Eyes</button>
                    <button onClick={()=>handleDate("teeth")} className="px-4 h-fit w-fit py-2 bg-red-500 hover:bg-red-700 rounded-2xl text-white">Teeth</button>
                    <button onClick={()=>handleDate("stress")} className="px-4 h-fit w-fit py-2 bg-red-500 hover:bg-red-700 rounded-2xl text-white">Stress</button>
                    <button onClick={()=>handleDate("blood")} className="px-4 h-fit w-fit py-2 bg-red-500 hover:bg-red-700 rounded-2xl text-white">Blood pressure</button>
                </div>
                <div className="w-full h-fit flex flex-wrap justify-center items-center gap-6 py-6">
                    {
                        data.map((data, i) => {
                            return (
                                <div className="h-64 w-64 bg-white rounded-t-xl shadow-xl" key={i}>

                                    <img src={data.image} alt="" className="h-full w-full rounded-t-xl" />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}
export default Gallery;