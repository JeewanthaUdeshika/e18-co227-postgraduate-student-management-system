 /**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 * 
 * This file contains the all the api controllings in the app
 */

import Joi from "joi";
import { UserDB } from "../model/user.js";

export const signUp = (req, res) => {
    // checking user entered data
    const {error} = validateUser(req.body);

    if (error){
        res.status(400).send(error.details[0].message);
        return;
    }

    // If user entered data is validated, create the user
    const user = new UserDB({
        nameWithInitials: req.body.nameWithInitials,
        fullName: req.body.fullName,
        postalAddress: req.body.postalAddress,
        email: req.body.email,
        telNo: req.body.telNo,
        password: req.body.password,
        supervisors: req.body.supervisors
    });

    // save the data in the database
    user
        .save(user)
        .then(data =>{
            res.send('data inserted successfully');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured"
            });
        });
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

    return schema.validate(userData);
}