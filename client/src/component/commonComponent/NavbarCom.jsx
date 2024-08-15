import { useState } from "react";
import Logo from "../../img/LogoCare.jpg"
import { Link } from "react-router-dom";
const NavbarCom = () => {
    const [showSidenav, setShowSidenav] = useState({ display: "none" })

    const SideNavOn = () => {
        setShowSidenav({ display: "block" })
    }
    const SideNavOff = () => {
        setShowSidenav({ display: "none" })
    }
    return (
        <>
            <div className="bg-white h-20 w-full flex justify-between items-center text-red-500 font-bold  sticky top-0">
                <div className="flex justify-between items-center h-full w-full px-5 relative">
                    <div className="flex justify-center items-center flex-col">
                        <img src={Logo} alt="" className="h-8 bg-slate-600" />
                        <h1>Human<span className="text-black">Care</span></h1>
                    </div>
                    <div className="hidden sm:flex justify-center items-center gap-6">
                        <Link to={"/home"}>Home</Link>
                        <Link to={"/service"}>Services</Link>
                        <Link to={"/blog"}>Blog</Link>
                        <Link to={"/contact"}>Contant Us</Link>
                    </div>
                    <div className="sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7" onClick={SideNavOn}>
                            <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                        </svg>
                        <div className="absolute h-fit w-64 bg-white top-0 right-0 p-4" style={showSidenav}>
                            <div className="h-full w-full relative flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 text-black absolute top-3 right-3 hover:text-red-500" onClick={SideNavOff}>
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                                <div className="flex flex-col justify-center items-center gap-6 mt-12 mb-5">
                                    <Link to={"/home"} className="hover:text-black">Home</Link>
                                    <Link to={"/service"} className="hover:text-black">Services</Link>
                                    <Link to={"/blog"} className="hover:text-black">Blog</Link>
                                    <Link to={"/contact"} className="hover:text-black">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavbarCom;