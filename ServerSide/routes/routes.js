/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 * 
 * This file contains the all the routes of application
 */

import express from "express";
import {getUser, gotologin, gotosignup} from '../services/services.js';
import { addStaff, approveStudent, login, signUp } from "../controller/controller.js";
import { isAdmin } from "../Middleware/auth.js";
import passport from "passport";

// Get Router from express
const route = express.Router();

/**
 * @description login Route
 * @method GET
 */
 route.get('/', (req, res) => {
  res.render('index.ejs', {user: req.user})
 });

/**
 * @description login Route
 * @method GET
 */
route.get('/login', gotologin);

/**
 * @description Route to the signup page
 * @method GET
 */
route.get('/sign_up', gotosignup);

/**
 * @description Route to register an user
 * @method POST
 */
route.post('/user/signup', signUp);

/**
 * @description Route to login  an user
 * @method POST
 */
 route.post('/user/login', passport.authenticate('local', {
  successRedirect: '/',   // If success go to home
  failureRedirect: '/login',  // If fail to login, go back to login
  failureFlash: true      // Display message to user (that we have given in initialize function)
 }));

 /**
 * @description Route to approve a given userID for admin
 * @method GET
 */
  route.get('/admin/approve/:id',/*  isAdmin, */ approveStudent);

/**
 * @description Route to get user details with given id. Only admin can get information of  unregistered student
 * @method GET
 */
route.get('/user/pros/:id', isAdmin, getUser);

/**
 * @description Route to get user details with given id. Only admin can get information of  unregistered student
 * @method GET
 */
 route.get('/user/:id', /* userAuth, */ getUser);
/**@ToDo Make userAuth for identify the user */

  // Check admin
  route.get('/admin', isAdmin, (req, res)=>{
    res.send("You are an admin");
  })

/**
 * @description Rouute to add new staff member for tha database
 * @method POST
 */
route.post('/admin/addStaff', /* isAdmin, */ addStaff);

/**
 * @description Rouute to login with google
 * @method POST
 */
route.get('/auth/google', passport.authenticate('google' , {scope: ['email', 'profile']}));

/**
 * @description Rouute to after login with google
 * @method POST
 */
route.get('/auth/google/callback', passport.authenticate( 'google', {
  successRedirect: '/',
  failureRedirect: '/auth/google/failure'
}));

/**
 * @description Rouute to after login with google if login is failed
 * @method POST
 */
route.get('/auth/google/failure', (req, res)=> {
  res.status(404).send({message: "Some Error Occured with Sign in to google"})
})

export default route;