import appointmentData from "../Modles/appointment.schema.js";

const healthCheck = (req,res)=>{
    return res.send("api are properlly working... ")
}

const bookAppointment = async (req, res) => {

    const { owner, name, email, number, message } = req.body;
    if (!owner || !name || !email || !number || !message) return res.send("all field are mendetery");

    try {
        const response = new appointmentData({
            owner: req.body.owner,
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            message: req.body.message,
        })
        await response.save();
        return res.status(200).send("submitted your appointment ");
    } catch (error) {
        console.log("find error in bookappointment controller :: " + error);
    }
}

export { healthCheck, bookAppointment };