/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 *
 * This file contains the all the api controllings in the app
 */

import Joi from "joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { prospectiveUser, registeredUser, UserDB } from "../model/user.js";
import mongoose from "mongoose";
import { RegisteredDB } from "../model/registeredUser.js";
import { MailSender } from "../mailSender.js";
import moment from "moment";

dotenv.config({ path: "config.env" });

export const signUp = async (req, res) => {
  // checking user entered data
  const { error } = validateUser(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  } else {
    // Find if there is that username
    const username = req.body.nameWithInitials;
    const userExists = await UserDB.findOne({ nameWithInitials: username });
    if (userExists) {
      return res.status(409).send({ message: "User already exists" });
    }

    try {
      let user;
      // encript the password to send to the database
      bcrypt.hash(req.body.password, 10, (error, hashed) => {
        if (error) {
          return res.status(401).send({
            message: "Password encryption failed",
            error: error.message,
          });
        }

        // Check the register status of user
        if (req.body.regState === "Registered") {
          user = new registeredUser({
            nameWithInitials: req.body.nameWithInitials,
            fullName: req.body.fullName,
            postalAddress: req.body.postalAddress,
            email: req.body.email,
            telNo: req.body.telNo,
            password: hashed,
            supervisors: req.body.supervisors,
            regNo: req.body.regNo,
            DOR: req.body.DOR,
            degree: req.body.degree,
            studyMode: req.body.studyMode,
            researchTopic: req.body.researchTopic,
            completionYear: req.body.completionYear,
            progressLevel: req.body.progressLevel,
            dateofLastSubmission: req.body.dateofLastSubmission,
            URLtoWebsite: req.body.URLtoWebsite,
          });
        } else if (req.body.regState === "Prospective") {
          user = new prospectiveUser({
            nameWithInitials: req.body.nameWithInitials,
            fullName: req.body.fullName,
            postalAddress: req.body.postalAddress,
            email: req.body.email,
            telNo: req.body.telNo,
            password: hashed,
            supervisors: req.body.supervisors,
            researchArea: req.body.researchArea,
            reseachProgram: req.body.reseachProgram,
          });
        }

        // save the data in the database
        user
            .save(user)
            .then(async data =>{
                const maxAge = 3*60*60;     // Expiration time 3hrs
                // Generating token to send
                const token = jwt.sign(
                    {id: data.__id, email: data.email, name: data.nameWithInitials},
                    process.env.jwtSecret,
                    {
                        expiresIn: maxAge
                    }
                    );

                    // Sending a cookie to the user
                res.cookie("userToken", token, {
                    httpOnly: true,
                    maxAge: maxAge*1000,     // 3hrs in ms
                });

                // Make link to send to admin to access user data
                const approvalLink = "http://localhost:3001/user/pros/" + data.id;
                console.log(approvalLink);

                const admin = await UserDB.findOne({role: "admin"});
                let emailList = [admin.email];

                // Sending Email to the admin informing that new user is registered
                const regDate = moment().add(5, "s").format();
                new MailSender(emailList, regDate, user.nameWithInitials, "admin", approvalLink).sendEmail();

                res.status(208).send({message: 'Data inserted successfully', user});
                
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occured"
                });
            });

            const admin = await UserDB.findOne({ role: "admin" });
            new MailSender(
              admin.email,
              moment().add(5, "s").format(),
              "Administrator",
              "admin"
            ).sendEmail();

            /**@ToDo Send Mail o the admin that new user is registered */

            res
              .status(208)
              .send({ message: "data inserted successfully", user });
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message || "Some error occured",
            });
          });
      });
    } catch (err) {
      res.status(401).send({ message: "User not created", error: err.message });
    }
  }
};

// Controller function for login
export const login = async (req, res) => {
  const username = req.body.nameWithInitials;
  const password = req.body.password;

  // Check the username and password is present
  if (!username || !password) {
    return res
      .status(400)
      .send({ message: "Username  or Password not present" });
  }

  // If username or password present
  try {
    // Find in the databse that username exists
    const user = await UserDB.findOne({ nameWithInitials: username });

    if (!user) {
      res.status(401).send({
        message: "Login not successfull",
        error: "User not found",
      });
    } else {
      // Decript the password and compare it
      bcrypt.compare(password, user.password).then((result) => {
        if (result) {
          const maxAge = 3 * 60 * 60; // time that cookie lasts

          // Make the token
          const token = jwt.sign(
            { id: user.__id, email: user.email, name: user.nameWithInitials },
            process.env.jwtSecret,
            {
              expiresIn: maxAge,
            }
          );

          // Send it as cookie
          res.cookie("userToken", token, {
            httpOnly: true,
            maxAge: maxAge * 1000,
          });
          res.status(200).send({ message: `Hi ${user.nameWithInitials}` });
        } else {
          res.status(400).send({
            message: "Username or Password incorrect",
          });
        }
      });
    }
  } catch (error) {
    res.status(400).send({
      message: "An error occured",
      error: error.message,
    });
  }
};

// Function to approve student. This passes the data to regstered database
export const approveStudent = async (req, res) => {
  const userID = req.params.id;

  if (!userID) {
    return res.status(400).send({ message: "User not found" });
  }

  // Get user details from the userDB
  const user = await UserDB.findById(userID);
  const RegDate = new Date();
  if (user) {
    await RegisteredDB.create({
      nameWithInitials: user.nameWithInitials,
      fullName: user.fullName,
      postalAddress: user.postalAddress,
      email: user.email,
      telNo: user.telNo,
      password: user.password,
      supervisors: user.supervisors,
      researchArea: user.researchArea,
      reseachProgram: user.reseachProgram,
      RegisteredDate: RegDate,

    const userID = req.params.id;
    
    if (!userID){
        return res.status(400).send({message: "User not found"});
    }

    // Get user details from the userDB
    const user = await UserDB.findById(userID);
    const RegDate = new Date();
    if (user){
        await RegisteredDB.create({
            nameWithInitials: user.nameWithInitials,
            fullName: user.fullName,
            postalAddress: user.postalAddress,
            email: user.email,
            telNo: user.telNo,
            password: user.password,
            supervisors: user.supervisors,
            researchArea: user.researchArea,
            reseachProgram: user.reseachProgram,
            RegisteredDate: RegDate
        });

        /** Send Email to user that he is approved */
        const regDate = moment().add(10, "s").format();
        new MailSender(user.email, regDate, user.nameWithInitials, "regSuccess", "").sendEmail();
        res.status(200).send({message: "User  approved by admin"});
        


    }
    else{
        res.status(400).send({message: "There is no user with that ID"});
    }
}

function validateUser (userData){
    // Joi Schema for checking sign up data
    const schema = Joi.object({
        nameWithInitials : Joi.string().min(3).required(),
        fullName: Joi.string().required(),
        postalAddress: Joi.string().required(),
        email: Joi.string().email({minDomainSegments: 2}).required(),
        telNo: Joi.number().min(10).required(),
        password: Joi.string().required(),
        regState: Joi.string().valid('Registered', 'Prospective'),
        regNo: Joi.string(),
        DOR: Joi.date().raw(),
        degree: Joi.string().valid('PhD', 'MPhil', 'Msc', 'MEng', 'Provisional'),
        studyMode: Joi.string().valid('Full', 'Part'),
        /* supervisors: Joi.array().items(Joi.string()) */  /**@Todo Get array of supervisors from frontend */ 
        supervisors: Joi.string(),
        researchTopic: Joi.string(),
        completionYear: Joi.number().min(4),
        progressLevel: Joi.string().valid('Half Year Progress Report Submitted', 'Annual Progress Report Submitted', 'Annual Oral Presentation Completed', 'Viva Completed', 'Thesis Submitted for Review', 'Final Thesis Submitted'),
        dateofLastSubmission: Joi.date(),
        urlToWebsite: Joi.string(),
        researchArea: Joi.string(),
        reseachProgram: Joi.string().valid('PhD', 'MPhil'),
    });
    res.status(200).send({ message: "User  approved by admin" });
    /**@ToDo Send Email to user that he is approved */
  } else {
    res.status(400).send({ message: "There is no user with that ID" });
  }
};

function validateUser(userData) {
  // Joi Schema for checking sign up data
  const schema = Joi.object({
    nameWithInitials: Joi.string().min(3).required(),
    fullName: Joi.string().required(),
    postalAddress: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    telNo: Joi.number().min(10).required(),
    password: Joi.string().required(),
    regState: Joi.string().valid("Registered", "Prospective"),
    regNo: Joi.string(),
    DOR: Joi.date().raw(),
    degree: Joi.string().valid("PhD", "MPhil", "Msc", "MEng", "Provisional"),
    studyMode: Joi.string().valid("Full", "Part"),
    /* supervisors: Joi.array().items(Joi.string()) */ /**@Todo Get array of supervisors from frontend */
    supervisors: Joi.string(),
    researchTopic: Joi.string(),
    completionYear: Joi.number().min(4),
    progressLevel: Joi.string().valid(
      "Half Year Progress Report Submitted",
      "Annual Progress Report Submitted",
      "Annual Oral Presentation Completed",
      "Viva Completed",
      "Thesis Submitted for Review",
      "Final Thesis Submitted"
    ),
    dateofLastSubmission: Joi.date(),
    urlToWebsite: Joi.string(),
    researchArea: Joi.string(),
    reseachProgram: Joi.string().valid("PhD", "MPhil"),
  });

  return schema.validate(userData);
}

// This function is to add specific user to main database
