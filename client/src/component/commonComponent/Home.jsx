import image1 from "../../img/homeslide1.jpg"
import image2 from "../../img/homeslide2.png"
import harshit from "../../img/harshit.jpg"
import { Link } from "react-router-dom"
import ImageSlider from "./ImageSlider"
import CashBackBanner from "./CashBackBanner"
import OurMission from "./OurMission"
import DoctorTeam from "./DoctorTeam"
import Gallery from "./Gallery"
import defaultim from "../../img/defaultDp.jpg"
const Home = () => {
    return (
        <>
            <ImageSlider />
            <div className="w-full h-1/2 lg:h-96 relative ">
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

            <OurMission />

            <div className="w-full py-20 h-fit justify-center items-center">
                <h1 className="font-bold text-black text-3xl sm:4xl md:text-5xl lg:text-6xl text-center  flex justify-center flex-col items-center ">
                    Expert designed solutions
                    <br />
                    <span className="text-red-500"> 85% <span className="text-black">success rate</span> </span>
                </h1>
            </div>

            <CashBackBanner />

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0634358691495!2d77.47809541069235!3d28.477636175648577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea1a83be5989%3A0x6a3690bfa642b5c3!2sGALGOTIAS%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1724486755196!5m2!1sen!2sin"
                width="100%"
                height="550"
                style={{ border: 0, padding: 5, marginTop: 10 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Gallery />
            <DoctorTeam />
            <div className="w-full h-fit flex flex-col justify-center items-center gap-3 mt-3 px-4 py-8 bg-white">
                <h1 className="text-center text-red-500 font-bold text-xl sm:text-2xl md:text-4xl mt-4">Meet our Developer</h1>
                <p className="px-2">Take a look innovative and experiance team for Our Developing.</p>
                <div className="w-full h-fit flex flex-wrap justify-center items-center gap-6 py-6">
                    <div className="h-80 w-64 bg-white rounded-t-xl shadow-xl">
                        <div className="w-full h-48 rounded-t-xl">
                            <img src={harshit} alt="" className="h-full w-full rounded-t-xl" />
                        </div>
                        <div className="w-full h-40">
                            <h1 className="text-gray-500 py-4 text-center">Harshit Gupta</h1>
                            <p className=" text-center px-2 ">A full-stack Developer <span className="text-red-500">And</span> Founder of HumanCare 😊</p>
                        </div>
                    </div>
                    <div className="h-80 w-64 bg-white rounded-t-xl shadow-xl">
                        <div className="w-full h-48 rounded-t-xl">
                            <img src={defaultim} alt="" className="h-full w-full rounded-t-xl" />
                        </div>
                        <div className="w-full h-40">
                            <h1 className="text-gray-500 py-4 text-center">yash</h1>
                            <p className=" text-center px-2 ">App Developer</p>
                        </div>
                    </div>

                </div>
                
            </div>
        </>
    )
}
export default Home;