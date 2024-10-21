import express from "express";
import { RegisterDoctor } from "../Controller/doctor.controller.js";
import upload from "../utils/ImageUpload.utils.js";


const docrouter  = express.Router();

docrouter.route("/registerdoc").post(upload.single('avatar'),RegisterDoctor);

export default docrouter;
