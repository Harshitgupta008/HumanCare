import express from "express";
import { healthCheck, bookAppointment } from "../Controller/appointment.controller.js";
import { emailcollection } from "../Controller/emailcollection.controller.js";
import { review } from "../Controller/review.controller.js";

const commonRout = express.Router();

//check route 
commonRout.route("/health-check").get(healthCheck);

commonRout.route("/bookapppointment").post(bookAppointment);
commonRout.route("/emailcollections").post(emailcollection);
commonRout.route("/reviews").post(review);

export default commonRout;