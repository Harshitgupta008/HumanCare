import express from "express";
import { RegisterPatient } from "../Controller/patient.controller.js";
import upload from "../utils/ImageUpload.utils.js";

const patientrouter  = express.Router();

patientrouter.route("/registerdoc").post(upload.single('avatar'),RegisterPatient);

export default patientrouter;