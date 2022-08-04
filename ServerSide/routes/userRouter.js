/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 *
 * This file contains the all the user routes of the application
 */

import express from "express";
import passport from "passport";
import {
  forgotPassword,
  resetPassword,
  signUp,
  submission,
  updatePassword,
  updatePhotoData,
} from "../controller/controller.js";
import { isLogged } from "../Middleware/auth.js";
import { getUser } from "../services/services.js";
import {
  studentSubmission,
  uploadUserPhoto,
  userDocUpload,
} from "../utils/storages.js";

// Get router from the express
const userRoute = express.Router();

/* @Todo This route is only for testing, Remove when connected to the frontend */
userRoute.get("/", (req, res) => {
  res.send({ message: "Login Successful" });
});

/**
 * @description Route to user login
 * @method POST
 */
userRoute.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/user", // If success go to home
    //failureRedirect: '/user/login',     // If fail to login, go back to login
    failureFlash: true, // Display message to user (that we have given in initialize function)
  })
);

/**
 * @description Route to user signup
 * @method POST
 */
userRoute.post("/signup", userDocUpload.single("docs"), signUp);

/**
 * @description Route to get user details with given id. Only admin can get information of  unregistered student
 * @method GET
 */
userRoute.get("/profile", isLogged, getUser);

/**
 * @description Route to forgot password
 * @method POST
 */
userRoute.post("/forgotPassword", forgotPassword);

/**
 * @description Rouute to forgot password
 * @method POST
 */
userRoute.patch("/resetPassword/:token", resetPassword);

/**
 * @description Route to update password
 * @method PATCH
 */
userRoute.patch("/updatePassword/", isLogged, updatePassword);

/**
 * @description Route to upload user submissions
 * @mehtod POST
 */
userRoute.post(
  "/submit",
  isLogged,
  studentSubmission.single("submissionFile"),
  submission
);

/**
 * @description Route to upload profile picture
 * @mehtod PATCH
 */
userRoute.patch(
  "/uploadpp",
  isLogged,
  uploadUserPhoto.single("photo"),
  updatePhotoData
);

userRoute.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:3000/login");
  });
});

export default userRoute;
