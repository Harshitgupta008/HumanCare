import { useNavigate } from "react-router-dom";

const LogoutCleint = () => {
    const Navigation = useNavigate();
    const LogoutUser = () => {
        localStorage.removeItem("patientToken");
        Navigation("/home")
        return location.reload();
    }
    return (
        <>
            <div className="flex  flex-col items-center h-screen px-4 py-8 mt-2 bg-white w-full">
                <h1 className="text-center text-red-500 font-bold text-xl sm:text-2xl md:text-4xl px-4">Logout <span className="text-black">Patient</span></h1>
                <hr className="bg-slate-800  w-full mb-2 mt-4" />
                <div className="w-48 mt-3">
                    <button onClick={LogoutUser} className=" w-full  py-3 rounded-full bg-red-500 text-white hover:bg-red-700">Logout</button>
                </div>

            </div>
        </>
    )
}
export default LogoutCleint;