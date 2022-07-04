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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
////

export const gotologin = (req, res)=>{
    res.sendFile(path.join(__dirname, '../view/login.html'));
}

export const gotosignup = (req, res)=>{
    res.sendFile(path.join(__dirname, '../view/signup.html'));
}
