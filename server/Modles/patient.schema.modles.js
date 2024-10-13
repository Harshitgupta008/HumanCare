import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const patientSchema = new mongoose.Schema({
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

patientSchema.pre('save', async function (next) {
    try {
        const round = 10;
        if (this.isModified("password")) {
            this.password = bcrypt.hash(this.password, round);
        }
        next();
    } catch (error) {
        console.log("error in patient bcrypt schema :: "+error);
    }
})

patientSchema.methods.GeneratePatientToken = async function(payload){
    try {
        const token = await jwt.sign(payload,process.env.SECRET_KEY);
        return token;
    } catch (error) {
        console.log(`error in patientschema Genratetoken part :: ${error}`)
    }
}

const patientData = mongoose.model("patients", patientSchema);

export default patientData;