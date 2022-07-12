/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 * 
 * This file contains all the mongoDB schemas for admin, supervisors, examnors
 */

import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    name: {
    type: String,
    },
    email: {
    type: String,
    },
    role: {
        type: String,
        enum: ["admin", "supervisor", "examinor"],
        required: true
    }
});

export const StaffDB = mongoose.model("staffData", staffSchema);