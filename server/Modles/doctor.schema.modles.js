import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const doctorSchema = new mongoose.Schema({
    dp: {
        data: Buffer,
        type: String
    },
    usertype: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
}, { timestamps: true });

doctorSchema.pre('save', async function (next) {
    try {
        const round = 10;
        if (this.isModified("password")) {
            this.password = bcrypt.hash(this.password, round);
        }
        next();
    } catch (error) {
        console.log("error in doctor bcrypt schema :: "+error);
    }
})

doctorSchema.methods.GenerateDoctorToken = async function(payload){
    try {
        const token = await jwt.sign(payload,process.env.SECRET_KEY);
        return token;
    } catch (error) {
        console.log(`error in doctorschema Genratetoken part :: ${error}`)
    }
}

const doctorData = mongoose.model("doctors", doctorSchema);

export default doctorData;