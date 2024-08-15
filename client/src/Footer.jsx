import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="h-fit py-4 mt-4 w-full flex justify-center items-center bg-white flex-col gap-3">
                <div className="flex flex-wrap justify-center items-center gap-4 font-bold text-gray-500 ">
                    <li> <Link to={"/home"} className="hover:text-red-400"> Home</Link ></li>
                    <li> <Link to={"/blog"} className="hover:text-red-400">Blog</Link ></li>
                    <li> <Link to={"/contact"} className="hover:text-red-400">Appoiment</Link ></li>
                </div>
                <h1 className="text-center">Owner :- <span className="text-red-500 font-bold">Harshit Gupta</span></h1>
                <h1 className="text-center">©Copy-right <span className="text-red-500"> By HumanCare</span></h1>
            </div>
        </>
    )
}
export default Footer;