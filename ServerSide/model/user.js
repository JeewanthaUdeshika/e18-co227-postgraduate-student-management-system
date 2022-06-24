/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 * 
 * This file contains all the mongoDB schemas
 */

import mongoose from "mongoose";

// Shape of the user document
var userSchema = new mongoose.Schema({
    nameWithInitials: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true,
        unique: true
    },
    postalAddress: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    telNo: {
        type: Number,
        required: true
    },
    // TODO : These password and username should be encrypted using bcrypt
    password: {
        type: String,
        required: true
    }

}); 

// Make the document model
export const UserDB = mongoose.model('userData', userSchema);

