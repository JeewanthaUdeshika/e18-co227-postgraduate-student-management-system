/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 * 
 * This file contains the all the routes of application
 */

import express from "express";
import {getUser, gotologin, gotosignup} from '../services/services.js';
import { approveStudent, login, signUp } from "../controller/controller.js";
import { adminAuth } from "../Middleware/auth.js";

// Get Router from express
const route = express.Router();

/**
 * @description Root Route
 * @method GET
 */
route.get('/', gotologin);

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
 route.post('/user/login', login);

 /**
 * @description Route to approve a given userID for admin
 * @method GET
 */
  route.get('/admin/approve/:id', adminAuth, approveStudent);

/**
 * @description Route to get user details with given id. Only admin can get information of  unregistered student
 * @method GET
 */
route.get('/user/pros/:id', adminAuth, getUser);

/**
 * @description Route to get user details with given id. Only admin can get information of  unregistered student
 * @method GET
 */
 route.get('/user/:id', /* userAuth, */ getUser);
/**@ToDo Make userAuth for identify the user */

  // Check admin
  route.get('/admin',adminAuth, (req, res)=>{
    res.send("You are an admin");
  })

export default route;