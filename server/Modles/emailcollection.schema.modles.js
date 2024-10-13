import mongoose from "mongoose";

// create this modle for sending update news by email :- harshit gupta

const emailcollectionSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
}, { timestamps: true });

const emailcollectionData = mongoose.model("emailcollection",emailcollectionSchema);

export default emailcollectionData;