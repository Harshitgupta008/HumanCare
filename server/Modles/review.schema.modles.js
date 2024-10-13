import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    dp: {
        data: Buffer,
        type: String
    },
    reviewowner : {
        type : mongoose.Schema.Types.ObjectId,
        require:true
    },
    name: {
        type: String,
        require: true
    },
    review: {
        type : String,
        require:true
    }
}, { timestamps: true });

const reviewData = mongoose.model("review",reviewSchema);

export default reviewData;