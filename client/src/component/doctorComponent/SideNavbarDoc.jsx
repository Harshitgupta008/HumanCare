import {  useState } from "react";

const SideNavbarDoc = () => {
    const [slideCss, setSlideCss] = useState({ width: "0" })
    const CloseNavbar = () => {
        setSlideCss({ width: "0" })
    }
    const OpenNav = () => {
        setSlideCss({ width: "250px" });
    }

    return (
        <>
            <div className=" bg-white h-fit  py-8 w-full relative">
                <div onClick={OpenNav} className="h-fit flex justify-end px-4 items-center  py-1 rounded-r-full w-16 bg-gray-200 text-black  hover:w-20  cursor-pointer transition-all ease-in-out duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                <div style={slideCss} className="h-fit absolute top-0 left-0 transition-all ease-in-out duration-300">
                    <div className=" hiddenoverfolw flex flex-col h-screen bg-gray-200 text-black font-bold w-full pt-5 pb-3 gap-3  overflow-y-auto   rounded-r-lg ">
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                        <span className="w-full hover:bg-red-500 hover:text-white cursor-pointer py-1  flex justify-center items-center">Home</span>
                    </div>
                    <div onClick={CloseNavbar} className="absolute top-1 right-1 h-fit w-fit px-1 py-1 bg-red-500 bg-opacity-65 hover:bg-opacity-100 cursor-pointer rounded-full text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SideNavbarDoc;