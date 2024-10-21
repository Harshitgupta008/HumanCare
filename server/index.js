import express from "express";
import dotenv from "dotenv";
import data from "./Data/Data.js";
import commonRout from "./Routes/common.routes.js";
import patientrouter from "./Routes/patient.routes.js";
import docrouter from "./Routes/doctor.routes.js";
const app = express();
const port = process.env.PORT || 4000;

dotenv.config();

app.use(express.json());
data();

app.use("/api", commonRout);
app.use("/api",patientrouter);
app.use("/api",docrouter);

app.listen(port, () => {
    console.log(`your express on run port no :: ${port}`)
})
