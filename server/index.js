import express from "express";
import dotenv from "dotenv";
import data from "./Data/Data.js";
const app = express();
const port = process.env.PORT || 4000;

dotenv.config();

app.use(express.json());
data();

app.listen(port,()=>{
    console.log(`your express on run port no :: ${port}`)
})
