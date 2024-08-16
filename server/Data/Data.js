import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Db = process.env.MONGO_URL;

const data = async ()=>{
    try {
        await mongoose.connect(Db);
        console.log("Data part done")
    } catch (error) {
        console.log("Error in monogo part Db file :: "+error)
    }
}
    
export default data;