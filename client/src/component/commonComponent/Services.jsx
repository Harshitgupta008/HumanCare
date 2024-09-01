import { useState } from "react";
import Allservice from "./Allservice";
import Review from "./Review";
import CashBackBanner from "./CashBackBanner"
import img1 from "../../img/img1.png"
import img2 from "../../img/img2.png"
import img3 from "../../img/img3.png"
const Service = () => {
    const [data, setData] = useState(Allservice)
    const [email, setEmail] = useState("")
    const EmailSubmit = ()=>{
        window.alert("email send successfully")
        setEmail("");
    }
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

            <CashBackBanner />

            <div className="bg-white">
                <div className="w-full h-fit flex justify-center items-center md:gap-7 mt-3 flex-wrap md:flex-nowrap md:px-5 px-3 bg-white py-3">
                    <div className="h-fit w-full flex justify-center items-center md:w-1/2">
                        <img src={img1} alt="" className="rounded-2xl md:h-96 md:w-full" />
                    </div>
                    <div className="md:h-96 h-fit w-full md:w-96  flex gap-8 py-10 flex-col">
                        <h1 className="text-2xl font-bold">Looking for information about mental health?</h1>
                        <p>
                            Explore the mental health and substance use disorder
                            services that Medicare covers and learn about
                            resources that can help you find the care you need.
                        </p>
                        <button className="md:w-fit w-full bg-red-500 text-white h-fit px-8 py-3 rounded-lg hover:bg-red-700">Discover Services</button>
                    </div>
                </div>
                {/* <hr className="bg-slate-800  w-full " /> */}
                <div className="w-full h-fit flex justify-center items-center md:gap-7 mt-16 flex-wrap md:flex-nowrap md:px-5 px-3 bg-white py-3">
                    <div className="h-fit w-full flex justify-center items-center md:w-1/2">
                        <img src={img2} alt="" className="rounded-2xl md:h-96 md:w-full" />
                    </div>
                    <div className="md:h-96 h-fit w-full md:w-96  flex gap-8 py-10 flex-col">
                        <h1 className="text-2xl font-bold">Get help with prescription drug costs</h1>
                        <p>
                            People with limited resources can now qualify for even more
                            savings on Medicare drug costs (Part D). Find out if you qualify and how much you can save.
                        </p>
                        <button className="md:w-fit w-full bg-red-500 text-white h-fit px-8 py-3 rounded-lg hover:bg-red-700">Extra Help</button>
                    </div>
                </div>
            </div>

            <div className="flex justify-around px-5 flex-wrap md:flex-nowrap gap-3 mt-5  pt-4 items-center">
                <div className="flex flex-col w-96 gap-3 py-4 justify-center">
                    <h1 className="text-2xl text-red-500">Get important news & updates</h1>
                    <p>Get reminders about open enrollment, ways to save costs, and more.</p>
                    <div className="flex flex-col gap-2 py-3 w-96">
                        <label htmlFor="email" className="px-1">Enter your email address</label>
                        <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your name" className="outline-none border-2 border-red-400 w-full rounded-xl px-4 py-3" />
                    </div>
                    <button onClick={EmailSubmit} className="w-fit h-fit px-8 py-3 bg-red-500 rounded-lg text-white hover:bg-red-700">Next Step</button>
                </div>
                <img src={img3} alt="" className="h-96" />
            </div>


            <Review />
        </>
    )
}
export default Service;