import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    message: {
        type: String,
        require: true
    },
}, { timestamps: true });


const appointmentData = mongoose.model("appointment", appointmentSchema);

export default appointmentData;

