/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 * 
 * This file contains the all the routes of application
 */

import express from "express";
import {gotologin, gotosignup} from '../services/services.js';
import { signUp } from "../controller/controller.js";

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
 * @description Route to register a user
 * @method GET
 */
route.post('/api/user', signUp);

export default route;