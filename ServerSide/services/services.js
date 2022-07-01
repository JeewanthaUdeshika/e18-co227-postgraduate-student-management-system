/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 * 
 * This file contains the all services(Rendering) of the application
 */


import express from 'express';

//// This is for render html...This should be deleted when fontend connected
import path from "path";
import { fileURLToPath } from 'url';
import { UserDB } from '../model/user.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
////

export const gotologin = (req, res)=>{
    res.sendFile(path.join(__dirname, '../view/login.html'));
}

export const gotosignup = (req, res)=>{
    res.sendFile(path.join(__dirname, '../view/signup.html'));
}

export const getUser = async (req, res)=>{
    // Get user id from the link
    const userID = req.params.id;
    // Get user from the userdata base without password
    const user = await UserDB.findById(userID, '-password');

    if(user){
        return res.status(200).json(user);
    }
    else{
        return res.status(404).send({message: "User not found"});
    }
}
