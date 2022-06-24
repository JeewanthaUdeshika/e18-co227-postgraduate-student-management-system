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
        password: req.body.password
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
        postalAddress: Joi.string(),
        email: Joi.string().email({minDomainSegments: 2}),
        telNo: Joi.number(),
        password: Joi.string()
    });

    return schema.validate(userData);
}