import doc1 from "../../img/doc1.jpg"
import doc2 from "../../img/doc2.jpg"
import doc3 from "../../img/doc3.jpg"
import doc4 from "../../img/doc4.jpg"
const DoctorTeam = () => {
    return (
        <>
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
export default DoctorTeam;