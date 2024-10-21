import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv"
import doctorData from "../Modles/doctor.schema.modles.js";
import fs from "fs"
dotenv.config();


cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
});


// register of doctors
const RegisterDoctor =  async function (req, res) {

    const { name, email, password } = req.body;
    if (!name, !email, !password) return res.send("all fied are mendetory");

    try {
        // for image upload
        const uploadResult = await cloudinary.uploader
            .upload(req.file.path)
            .catch((error) => {
                console.log("error find in cloudinery upload in register doctor :: " + error);
            });

        console.log("url : " + uploadResult.secure_url + "id:" + uploadResult.public_id);

        const response = new doctorData({
            dp: uploadResult.secure_url,
            dpid: uploadResult.public_id,
            name: req.name,
            email: req.email,
            password: req.password,
        });


        fs.unlink(req.file.path, function (err) {
            if (err) console.log("error in delete fs" + err);
            else {
                console.log("delete file")
            }
        })
        const check = await doctorData.findOne({ email });
        if (check) {
            return res.status(404).send("User already exist");
        }else{
            await response.save();
            return res.status.send("data submitted");
        }

    } catch (error) {
        fs.unlink(req.file.path, function (err) {
            if (err) console.log("error in delete fs" + err);
            else {
                console.log("delete file")
            }
        })
        console.log("error in post doctor data :: " + error);
    }

}

export { RegisterDoctor };
