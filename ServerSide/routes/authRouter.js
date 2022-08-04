/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 *
 * This file contains the all the google authorization routes of the application
 */

import express from "express";
import passport from "passport";
import { isStaff } from "../Middleware/auth.js";

// Get router from the express
const authRoute = express.Router();

/**
 * @description Rouute to login with google
 * @method POST
 */
authRoute.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

/**
 * @description Rouute to after login with google
 * @method POST
 */
authRoute.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/procedure",
    failureRedirect: "http://localhost:3000/login",
  })
);

/**
 * @description Route to after login with google if login is failed
 * @method POST
 */
authRoute.get("/google/failure", (req, res) => {
  res.render("AuthFail.ejs"); // This is only for implement, Change this when frontend is connected
});

authRoute.get("/login/success", (req, res) => {
  if (req.user) {
    return res.status(200).json({
      user: req.user,
    });
  }
});

authRoute.get("/loginSuccess", (req, res) => {
  if (req.user) {
    return res.status(200).json({
      success: true,
      message: "sucessful",
      user: req.user,
    });
  }

  return res.status(401).json({
    message: "Not Authorized",
  });
});

authRoute.get("/isStaff", isStaff);

export default authRoute;
