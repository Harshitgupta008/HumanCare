import emailcollectionData from "../Modles/emailcollection.schema.modles.js";

const emailcollection = async (req,res)=>{
    const { name, email } = req.body;
    if(!name || !email ) return res.send("all field are mendetory");
    try {

        const response = new emailcollectionData({
            name : req.body.name,
            email : req.body.email, 
        })
        const check = await emailcollectionData.findOne({ email });
        if(!check){
            await response.save();
            return res.status(200).send("your email added in our collection ");
        }else{
            return res.status(400).send("email already exist ");
        }
        
    } catch (error) {
        console.log("find error in emailcollection in conltroller :: "+error);
    }
}

export { emailcollection };