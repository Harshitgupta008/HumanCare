import { useState } from "react";
import Allservice from "./Allservice";
const Service = () => {
    const [data, setData] = useState(Allservice)
    return (
        <>
            <div className="w-full h-fit flex flex-col justify-center items-center gap-3 mt-3 px-4 bg-white py-7">
                <h1 className="text-center text-red-500 font-bold text-xl sm:text-2xl md:text-4xl mt-4">Our Services</h1>
                <p className="px-2">Comprehensive Care Offered at Our Hospital</p>
                <div className="w-full h-fit flex flex-wrap justify-center items-center gap-6 py-6">
                    {
                        data.map((data, i) => {
                            return (
                                <div className="h-64 w-64 bg-white rounded-t-xl shadow-xl" key={i}>
                                    <div className="w-full h-48 rounded-t-xl">
                                        <img src={data.img} alt="" className="h-full w-full rounded-t-xl" />
                                    </div>
                                    <div className="w-full h-16">
                                        <h1 className="text-gray-500 py-4 text-center">{data.title}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}
export default Service;