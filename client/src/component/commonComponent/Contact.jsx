
const Contact = () => {
    const SubmitForm = (e)=>{
        e.preventDefault();
    }
    return (
        <>
            <div className="flex justify-center flex-col items-center h-fit px-4 py-8 mt-2 bg-white w-full">
                <h1 className="text-center text-red-500 font-bold text-xl sm:text-2xl md:text-4xl px-4">Contact <span className="text-black">Us</span></h1>
                <p className="py-5">Fill the form, for take Appointment</p>
                <hr className="bg-slate-800  w-full mb-3" />
                <form className="flex flex-col gap-4 px-1 w-80 md:w-96">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-red-500 font-bold px-3 py-1">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" className="h-12 px-4 py-5 border-gray-400 border-2 rounded-full w-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-red-500 font-bold px-3 py-1">Email</label>
                        <input type="text" id="email" placeholder="Enter your valid email" className="h-12 px-4 py-5 border-gray-400 border-2 rounded-full w-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="contact" className="text-red-500 font-bold px-3 py-1">Contact</label>
                        <input type="text" id="contact" placeholder="Enter your contact" className="h-12 px-4 py-5 border-gray-400 border-2 rounded-full w-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="message" className="text-red-500 font-bold px-3 py-1">Message</label>
                        <textarea type="text" id="message" placeholder="Drop your message" className="h-32 w-full border-gray-400 border-2  px-3 py-5 rounded-xl" />
                    </div>

                    <button onClick={SubmitForm} className=" h-fit w-full  py-3 rounded-full bg-red-500 text-white hover:bg-red-700">Submit</button>

                </form>
            </div>
        </>
    )
}
export default Contact;