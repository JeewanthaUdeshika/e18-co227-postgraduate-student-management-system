/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 *
 * This file contains the all the admin routes of the application
 */

import express from "express";
import passport from "passport";
import { addStaff, approveStudent } from "../controller/controller.js";
import { isAdmin } from "../Middleware/auth.js";
import { getToApprove } from "../services/services.js";

// Get Router from express
const adminRoute = express.Router();

/**
 * @description Route to approve a student
 * @method POST
 */
adminRoute.post("/approve", isAdmin, approveStudent);

/**
 * @description Rouute to add new staff member for the database
 * @method POST
 */
adminRoute.post("/addStaff", isAdmin, addStaff);

/**
 * @descripion Route to get unregistered users
 * @method GET
 */
adminRoute.get("/toApprove", isAdmin, getToApprove);

export default adminRoute;
