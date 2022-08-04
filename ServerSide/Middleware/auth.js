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

  return res.status(400).json({
    message: "Not Authorized",
  });
};

// Function for check user's role
export const isAdmin = async (req, res, next) => {
  // Passport check
  console.log(req.user);
  if (!req.user) {
    return res.status(401).json({
      message: "Not Authorized",
    });
  }
  if (req.isAuthenticated()) {
    const user = await StaffDB.findById(req.user.id);
    // console.log(user);
    if (user.role === "admin") {
      return next();
    } else {
      res.redirect("http://localhost:3000/login");
      // return res.status(401).send({message: 'Only  admins can proceed'});
    }
  }
  //res.status(401).send({message: "You have no admin authorization"})
  res.redirect("http://localhost:3000/login");
};

export const isStaff = async (req, res, next) => {
  const userID = req.user.id;
  // Passport check
  if (!req.user.id) {
    return res.status(401).json({
      message: "Not Authorized",
    });
  }

  if (req.isAuthenticated()) {
    const user1 = await StaffDB.findById(userID);
    const user2 = await RegisteredDB.findById(userID);

    if (user1) {
      if (user1.role === "admin") {
        return res.status(200).json({ message: "admin" });
      } else if (user1.role === "supervisor") {
        return res.status(200).json({ message: "supervisor" });
      } else if (user1.role === "examiner") {
        return res.status(200).json({ message: "examiner" });
      } else {
        return res.status(200).json({ message: "student" });
        // return res.status(401).send({message: 'Only  admins can proceed'});
      }
    } else if (user2) {
      return res.status(200).json({
        message: "student",
      });
    }
    // console.log(user.role);
  }
  //res.status(401).send({message: "You have no admin authorization"})
  return res.status(401).json({ message: "Unauthorized" });
};

// Function for check user's role
export const isSupervisor = async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Not Authorized",
    });
  }
  // Passport check
  if (req.isAuthenticated()) {
    const user = await StaffDB.findById(req.user.id);
    if (user.role === "supervisor" || user.role === "admin") {
      return next();
    } else {
      return res.status(401).json({ message: "Only  supervisors can proceed" });
    }
  }
  res.redirect("http://localhost:3000/login");
};

// Function for check user's role
export const isExaminor = async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Not Authorized",
    });
  }
  // Passport check
  if (req.isAuthenticated()) {
    const user = await StaffDB.findById(req.user.id);
    if (user.role === "examinor" || user.role === "admin") {
      return next();
    } else {
      return res.status(401).json({ message: "Only  examiners can proceed" });
    }
  }
  res.redirect("http://localhost:3000/login");
};
