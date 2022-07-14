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
import passport from "passport";            // For user authentication
import flash from "express-flash";          // For organize error messages
import session from "express-session";      // For manage different sessions with user
import helmet from "helmet";                // Add Http  security headers
import xss from 'xss-clean';                // For data sanitization against XSS

import routes from './routes/router.js';
import { connectDB } from "./database/connection.js";
import { initalizePassport } from "./Middleware/passport-config.js";



// Creating the express object
const app = express();


dotenv.config({path: 'config.env'});    // Path for the .env file
const PORT = process.env.PORT || 5000;  // Getting the port from env file

// Connect with the database
connectDB();

// Initializing the passport module
initalizePassport(passport);


app.use(bodyParser.json());                         // Make data encoding method to http body
app.use(bodyParser.urlencoded({extended: true}));   // Make data encoding method to http body
// app.use(cookieParser());        // Get cookie parser
app.use(flash());       // For get all the error messsages etc.
app.use(session({
    secret: process.env.SECRET, // secret key to encriptions
    resave: false,              // When nothing is changed, dont resave
    saveUninitialized: false,    // Dont dave empty values in the session
}));
app.use(passport.initialize()); // Initialize the passport module in every route
app.use(passport.session());    // allow passport to use "express-session"
app.use(helmet());
app.use(xss());


/////////////////////////////////////////////////////////////
/* app.use(function(req, res, next){
    req.session.lastUrl = req.originalUrl;
});
 */
////////////////////////////////////////////////////////////



/**@Warning This section is only for check user interface, remove this when font end is connected */ 
// import ejs from 'ejs';
app.set('view engine', 'ejs');
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Load router file
app.use('/', routes);

// Listening to the port
app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`);
});