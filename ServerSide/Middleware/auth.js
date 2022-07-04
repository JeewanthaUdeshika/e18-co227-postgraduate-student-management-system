 /**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 * 
 * This file contains the all user authententication middlewares for different roles
 */

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserDB } from "../model/user.js";

dotenv.config({path:"config.env"});

/**@ToDo There will be security issue in get admin by role, therefore after getting username and check in the database if he is admin */

// Authorization to the admin
export const adminAuth = async (req, res, next) => {
    // Get the given cookie
    const token = req.cookies.userToken;

    // Check there is token given
    if (token){
        jwt.verify(token, process.env.jwtSecret, async (err, decordedToken) => {
            // If there is an error
            if (err){
                return res.status(401).send({message: "Not authorized"})
            }
            else{
                // Get tokened user from the database
                const user = await UserDB.findOne({nameWithInitials: decordedToken.name});
                // If the user is not an admin
                if (user.role != "admin"){
                    return res.status(401).send({message: "Not Authoriized"})
                }
                else{
                    next()
                }
            }
        })
    }
    else{
        return res.status(401).send({message: "Not authorized, token not available"})
    }
}