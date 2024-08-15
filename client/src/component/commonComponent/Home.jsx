import image1 from "../../img/homeslide1.jpg"
import image2 from "../../img/homeslide2.png"

import doc1 from "../../img/doc1.jpg"
import doc2 from "../../img/doc2.jpg"
import doc3 from "../../img/doc3.jpg"
import doc4 from "../../img/doc4.jpg"
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <>
            <div className="w-full h-1/2 lg:h-96 ">
                <img src={image1} className="h-full w-full object-cover lg:object-fill" alt="..." />
            </div>

            <div className=" mt-3 py-7 bg-white flex items-center justify-center h-fit w-full flex-wrap gap-5 sm:gap-0 sm:flex-nowrap break-words">
                <div className="w-full md:w-1/2 h-76 mt-2 sm:h-96 lg:h-1/2  flex items-center justify-center flex-col">
                    <h1 className="font-bold text-red-500 text-3xl md:text-6xl text-center  flex justify-center flex-col items-center ">
                        Your Health<br />
                        <span className="text-black">Is Our Priority</span>
                    </h1>
                    <p className="mt-5 text-center px-4 text-red-500">
                        Your health is our priority— <span className="text-black"> Where compassion meets cutting-edge medical care, ensuring personalized treatment
                            and a healing environment
                            for you and your loved ones, every step of the way</span>
                    </p>
                    <Link to={"/contact"} className="mt-6 h-fit w-fit p-3 text-white rounded-md bg-red-500 hover:bg-red-700">Get Appointment</Link>
                </div>
                <div className="w-full md:w-1/2 h-72  sm:h-96 lg:h-1/2 ">
                    <img src={image2} alt="" className="h-full w-full" />
                </div>
            </div>

            <div className="w-full h-fit px-2 py-6 flex justify-around flex-wrap items-center bg-white gap-3 lg:justify-center lg:gap-20 lg:text-2xl">
                <div className="h-fit w-fit flex flex-col justify-center items-center gap-2 lg:gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 text-red-500 lg:size-10 ">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                    <h1>50+ Workers</h1>
                </div>
                <div className="h-fit w-fit flex flex-col justify-center items-center gap-2 lg:gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-red-500 lg:size-10 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                    </svg>
                    <h1>800+ Patient</h1>
                </div>
                <div className="h-fit w-fit flex flex-col justify-center items-center gap-2 lg:gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-red-500 lg:size-10 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h1>24 x 7 Ready</h1>
                </div>
            </div>

            <div className="mt-5 h-fit w-full bg-white px-3 py-7 flex flex-col gap-7 lg:gap-12">
                <h1 className="text-center text-red-500 font-bold text-xl sm:text-2xl md:text-4xl my-4">Our Mission</h1>

                <div className="w-full text-center flex flex-col gap-2 lg:px-14">
                    <h1 className="text-center font-bold text-sm sm:text-xl md:text-2xl my-4">Improving Patient Outcomes</h1>
                    <p> Ensuring that patients receive effective treatments that improve their health and quality of life.
                        Making healthcare services available to all individuals, regardless of
                        their socioeconomic status, geographic location, or other barriers.
                    </p>
                </div>
                <hr />
                <div className="w-full text-center flex flex-col gap-2 lg:px-14">
                    <h1 className="text-center font-bold text-sm sm:text-xl md:text-2xl my-4">Patient-Centered Care</h1>
                    <p>Focuses on providing care that respects and responds to the preferences,
                        needs, and values of patients. This includes fostering better communication, empathy, and shared
                        decision-making between patients and healthcare providers.
                    </p>
                </div>
                <hr />
                <div className="w-full text-center flex flex-col gap-2 lg:px-14">
                    <h1 className="text-center font-bold text-sm sm:text-xl md:text-2xl my-4">Public and Community Health</h1>
                    <p>Focuses on improving health outcomes at a population level by addressing social
                        determinants of health, promoting vaccination programs,
                        and tackling public health issues like infectious diseases and chronic conditions.
                    </p>
                </div>
                <hr />
                <div className="w-full text-center flex flex-col gap-2">
                    <h1 className="text-center font-bold text-sm sm:text-xl md:text-2xl my-4">Views </h1>
                    <p>Focuses on population health, disease prevention,
                        and health promotion at the community or global level.
                        Emphasizes individual patient care, including diagnosis, treatment,
                        and ongoing management of health conditions
                    </p>
                </div>

            </div>
            <div className="w-full h-fit flex flex-col justify-center items-center gap-3 mt-3 px-4 py-8 bg-white">
                <h1 className="text-center text-red-500 font-bold text-xl sm:text-2xl md:text-4xl mt-4">Meet our Team</h1>
                <p className="px-2">Take a look innovative and experiance team.</p>
                <div className="w-full h-fit flex flex-wrap justify-center items-center gap-6 py-6">
                    <div className="h-80 w-64 bg-white rounded-t-xl shadow-xl">
                        <div className="w-full h-48 rounded-t-xl">
                            <img src={doc1} alt="" className="h-full w-full rounded-t-xl" />
                        </div>
                        <div className="w-full h-32">
                            <h1 className="text-gray-500 py-4 text-center">Munna Bhai</h1>
                            <p className=" text-center px-2">4+ year Experince of  General Practitioner</p>
                        </div>
                    </div>
                    <div className="h-80 w-64 bg-white rounded-t-xl shadow-xl">
                        <div className="w-full h-48 rounded-t-xl">
                            <img src={doc2} alt="" className="h-full w-full rounded-t-xl" />
                        </div>
                        <div className="w-full h-32">
                            <h1 className="text-gray-500 py-4 text-center">Circuit</h1>
                            <p className=" text-center px-2">8+ Years of Experince in Cardiologist</p>
                        </div>
                    </div>
                    <div className="h-80 w-64 bg-white rounded-t-xl shadow-xl">
                        <div className="w-full h-48 rounded-t-xl">
                            <img src={doc3} alt="" className="h-full w-full rounded-t-xl" />
                        </div>
                        <div className="w-full h-32">
                            <h1 className="text-gray-500 py-4 text-center">Munna Bhai</h1>
                            <p className=" text-center px-2">2+ Years of Experince in Orthopedic Surgeon</p>
                        </div>
                    </div>
                    <div className="h-80 w-64 bg-white rounded-t-xl shadow-xl">
                        <div className="w-full h-48 rounded-t-xl">
                            <img src={doc4} alt="" className="h-full w-full rounded-t-xl" />
                        </div>
                        <div className="w-full h-32">
                            <h1 className="text-gray-500 py-4 text-center">Circuit</h1>
                            <p className=" text-center px-2">4+ Years of Experince in Pediatrician</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;