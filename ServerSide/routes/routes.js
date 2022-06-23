/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 * 
 * This file contains the all the routes of application
 */

import express from "express";
import {gotologin, gotosignup} from '../services/services.js';

// Get Router from express
const route = express.Router();

// Route to go login page
route.get('/', gotologin);

// Route to go signup page
route.get('/sign_up', gotosignup);

export default route;