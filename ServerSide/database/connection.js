/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 * 
 * This file contains the connection funtions with the database
 */

import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        // MongoDB conenction string
        const con = await mongoose.connect(process.env.MONGODB_URI, {useUnifiedTopology: true});

        console.log(`MongoDB Connected: ${con.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}