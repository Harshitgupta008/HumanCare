import cashImage from "../../img/cashbakimage.png"
import googlepay from "../../img/googlepay.png"
import applestore from "../../img/applestore.png"
const CashBackBanner = () => {
    return (
        <>
            <div className="mb-3 h-fit px-3 pb-11  flex items-center justify-center gap-10 sm:gap-20 md:gap-32 flex-wrap sm:flex-nowrap">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="font-bold text-red-500 text-2xl md:text-3xl text-center mb-2 ">30% Cashback Awaits 🤯</h1>
                    <span className="text-center text-gray-500 text-sm md:text-lg">Rewards for building habits 💸</span>
                    <span className="text-center text-gray-500 text-sm md:text-lg">Text doctors & fellow users 💬</span>
                    <span className="text-center text-gray-500 text-sm md:text-lg">Unlimited Doctor Consultations 🩺</span>
                    <span className="text-center text-sm md:text-lg font-bold text-red-500 cursor-pointer mt-7 mb-3">What are you waiting for? Download Now!!</span>
                    <div className="flex items-center justify-center gap-2">
                        <img src={googlepay} alt="" className="h-16 w-36 sm:h-20 sm:w-40 cursor-pointer" />
                        <img src={applestore} alt="" className="h-16 w-36 sm:h-20 sm:w-40 cursor-pointer" />
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col">
                    <img src={cashImage} alt="" className="h-44 w-48 sm:h-60 sm:w-64 md:h-72 md:w-80 lg:h-80 lg:w-96 " />
                </div>
            </div>
        </>
    )
}
export default CashBackBanner;