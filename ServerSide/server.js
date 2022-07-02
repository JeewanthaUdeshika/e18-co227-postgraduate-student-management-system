/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 * 
 * This file is the main file of the server side
 */

import express from "express";    // Import the express framework
import dotenv from "dotenv";     // Module for use secure data from anouther file (.env)
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";   // Module for use middlewares

import routes from './routes/routes.js';
import { connectDB } from "./database/connection.js";



// Creating the express object
const app = express();


dotenv.config({path: 'config.env'});    // Path for the .env file
const PORT = process.env.PORT || 8080;  // Getting the port from env file

// Connect with the database
connectDB();

// Make data encoding method to http body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Get cookie parser
app.use(cookieParser());

/**@Warning This section is only for check user interface, remove this when font end is connected */ 
// import ejs from 'ejs';
app.set('view engine', 'ejs');
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Load router file
app.use('/', routes);

// Listening to the port
app.listen(PORT, ()=>{
    console.log(`Server is running on  http://localhost:${PORT}`);
});