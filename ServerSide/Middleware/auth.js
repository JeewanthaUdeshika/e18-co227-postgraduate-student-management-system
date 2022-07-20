/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 *
 * This file contains the all user authententication middlewares for different roles
 */

import dotenv from "dotenv";
import { UserDB } from "../model/user.js";
import { RegisteredDB } from "../model/registeredUser.js";
import { StaffDB } from "../model/staff.js";

dotenv.config({ path: "config.env" });

export const isLogged = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
};

// Function for check user's role
export const isAdmin = async (req, res, next) => {
  // Passport check
  if (req.isAuthenticated()) {
    const user = await StaffDB.findById(req.user.id);
    console.log(user.role);
    if (user.role === "admin") {
      return next();
    } else {
      res.redirect("/user/login");
      // return res.status(401).send({message: 'Only  admins can proceed'});
    }
  }
  //res.status(401).send({message: "You have no admin authorization"})
  res.redirect("/user/login");
};

// Function for check user's role
export const isSupervisor = async (req, res, next) => {
  // Passport check
  if (req.isAuthenticated()) {
    const user = await RegisteredDB.findById(req.user.id);
    if (user.role === "supervisor") {
      return next();
    } else {
      return res.status(401).send({ message: "Only  supervisors can proceed" });
    }
  }
  res.redirect("/user/login");
};

// Function for check user's role
export const isExaminor = async (req, res, next) => {
  // Passport check
  if (req.isAuthenticated()) {
    const user = await RegisteredDB.findById(req.user.id);
    if (user.role === "examinor") {
      return next();
    } else {
      return res.status(401).send({ message: "Only  admins can proceed" });
    }
  }
  res.redirect("/user/login");
};
