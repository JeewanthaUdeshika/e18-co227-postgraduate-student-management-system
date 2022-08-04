/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 *
 * This file contains the all the api controllings in the app
 */

import Joi from "joi";
import bcrypt from "bcrypt";
import { prospectiveUser, registeredUser, UserDB } from "../model/user.js";
import { RegisteredDB } from "../model/registeredUser.js";
import { StaffDB } from "../model/staff.js";
import { MailSender } from "../mailSender.js";
import moment from "moment";
import sendEmail from "../utils/email.js";
import crypto from "crypto";
import logger from "../logger.js";

export const signUp = async (req, res) => {
  logger.info(req.body);
  // checking user entered data
  const { error } = validateUser(req.body);
  // console.log(error);
  if (error) {
    res.status(400).json(error.details[0].message);
    return;
  } else {
    // Find if there is that username
    const useremail = req.body.email;
    const userExists = await UserDB.findOne({ email: useremail });
    if (userExists) {
      return res.status(409).json({ message: "User already exists" });
    }

    try {
      let user;
      // encript the password to send to the database
      await bcrypt.hash(req.body.password, 10, (error, hashed) => {
        if (error) {
          return res.status(401).json({
            message: "Password encryption failed",
            error: error.message,
          });
        }

        // Check the register status of user
        if (req.body.registrationStatus === "registered") {
          user = new registeredUser({
            nameWithInitials: req.body.nameWithInitials,
            fullName: req.body.nameDenotedByInitials,
            postalAddress: req.body.postalAddress,
            email: req.body.email,
            telNo: req.body.contactNumber,
            password: hashed,
            supervisors: req.body.supervisors,
            regNo: req.body.registrationNumber,
            DOR: req.body.dateOfRegistration,
            degree: req.body.degreeSelect,
            studyMode: req.body.modeOfStudy,
            researchArea: req.body.researchArea,
            completionYear: req.body.yearOfCompletion,
            progressLevel: req.body.progressLevel,
            dateofLastSubmission: req.body.progressDate,
            URLtoWebsite: req.body.url,
          });
        } else if (req.body.registrationStatus === "prospective") {
          user = new prospectiveUser({
            nameWithInitials: req.body.nameWithInitials,
            fullName: req.body.nameDenotedByInitials,
            postalAddress: req.body.postalAddress,
            email: req.body.email,
            telNo: req.body.contactNumber,
            password: hashed,
            supervisors: req.body.supervisors,
            researchArea: req.body.researchArea,
            reseachProgram: req.body.reseachProgram,
            // state: req.body.state,
            docs: req.file.filename,
          });
        }

        // logger.debug(req.file.filename);
        logger.info(user);
        // save the data in the database
        user
          .save(user)
          .then(async (data) => {
            // Make link to send to admin to access user data
            const approvalLink = "http://localhost:3001/admin/toapprove";
            req.session.current_url = approvalLink;
            logger.info(approvalLink);

            const admin = await StaffDB.findOne({ role: "admin" });
            let emailList = [admin.email];

            // Sending Email to the admin informing that new user is registered
            const regDate = moment().add(5, "s").format();
            new MailSender(
              emailList,
              regDate,
              user.nameWithInitials,
              "admin",
              approvalLink
            ).sendEmail();

            res
              .status(201)
              .json({ message: "Data inserted successfully", user });
          })
          .catch((err) => {
            logger.info(err);
            res.status(500).json({
              message: err || "Some error occured",
            });
          });
      });
    } catch (err) {
      res.status(401).json({ message: "User not created", error: err.message });
    }
  }
};

// Function to approve student. This passes the data to regstered database
export const approveStudent = async (req, res) => {
  // Get given data from the front end
  // All the user data is loaded to the front end and submit them
  const userData = req.body;

  const user = await UserDB.findOne({ email: userData.email });
  const isApproved = await RegisteredDB.findOne({ email: userData.email });

  if (!user || isApproved) {
    res.status(400).json({ message: "There is no user with given email" });
  } else {
    const RegDate = new Date();
    await RegisteredDB.create({
      nameWithInitials: userData.nameWithInitials,
      fullName: userData.name,
      postalAddress: userData.postalAddress,
      email: userData.email,
      telNo: userData.telNo,
      password: user.password, // Get password directly from the userDB
      supervisors: userData.supervisors,
      researchArea: userData.researchArea,
      reseachProgram: userData.reseachProgram,
      RegisteredDate: RegDate,
    });
    // Change the status of the user Database
    user.status = "approved";

    // Set  default profile photo
    user.photo = "user.png";

    res.status(200).json({ message: "User  approved by admin" });

    // Save the user document
    user.save();

    // Sending Email to the user informing that user is approved by admin
    const regDate = moment().add(5, "s").format();
    new MailSender(
      user.email,
      regDate,
      user.nameWithInitials,
      "approved",
      ""
    ).sendEmail();

    // Getting admn email
    const admin = await StaffDB.findOne({ role: "admin" });

    // Set reminders about the submission
    let submissionDate1 = moment().add(3, "M").format();
    let submissionDate2 = moment().add(6, "M").format();
    let submissionDate3 = moment().add(12, "M").format();
    let submissionDate4 = moment().add(18, "M").format();
    let submissionDate5 = moment().add(24, "M").format();
    let submissionDate6 = moment().add(30, "M").format();
    let submissionDate7 = moment().add(36, "M").format();

    new MailSender(
      admin.email,
      submissionDate1,
      user.nameWithInitials,
      "submission",
      ""
    ).sendEmail();
    new MailSender(
      admin.email,
      submissionDate2,
      user.nameWithInitials,
      "submission",
      ""
    ).sendEmail();
    new MailSender(
      admin.email,
      submissionDate3,
      user.nameWithInitials,
      "submission",
      ""
    ).sendEmail();
    new MailSender(
      admin.email,
      submissionDate4,
      user.nameWithInitials,
      "submission",
      ""
    ).sendEmail();
    new MailSender(
      admin.email,
      submissionDate5,
      user.nameWithInitials,
      "submission",
      ""
    ).sendEmail();
    new MailSender(
      admin.email,
      submissionDate6,
      user.nameWithInitials,
      "submission",
      ""
    ).sendEmail();
    new MailSender(
      admin.email,
      submissionDate7,
      user.nameWithInitials,
      "submission",
      ""
    ).sendEmail();
  }
};

// Function for user validation using Joi
function validateUser(userData) {
  // Joi Schema for checking sign up data
  const schema = Joi.object({
    nameWithInitials: Joi.string().min(3).required(),
    nameDenotedByInitials: Joi.string().required(),
    postalAddress: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    contactNumber: Joi.string(),
    password: Joi.string().required(),
    confirmedPassword: Joi.string(),
    // regState: Joi.string().valid("Registered", "Prospective"),
    registrationNumber: Joi.string(),
    dateOfRegistration: Joi.date().raw(),
    degreeSelect: Joi.string().valid(
      "phd",
      "mphill",
      "msc",
      "meng",
      "provisional"
    ),
    modeOfStudy: Joi.string().valid("fullTime", "partTime"),
    /* supervisors: Joi.array().items(Joi.string()) */ /**@Todo Get array of supervisors from frontend */
    supervisors: Joi.string(),
    researchTopic: Joi.string(),
    yearOfCompletion: Joi.string(),
    progressLevel: Joi.string().valid(
      "halfYearReportSubmitted",
      "annualProgressReportSubmitted",
      "annualOralPresentationSubmitted",
      "vivaCompleted",
      "thesisSubmittedForReview",
      "finalThesisSubmitted"
    ),
    progressDate: Joi.date(),
    url: Joi.string(),
    researchArea: Joi.string(),
    researchProgram: Joi.string(),
    registrationStatus: Joi.string().valid("prospective", "registered"),
  });

  return schema.validate(userData);
}

// Function to add staff members
export const addStaff = async (req, res) => {
  // Find if there is that email
  const email = req.body.email;

  logger.info(req.body);
  console.log(req.body);
  const userExists = await StaffDB.findOne({ email: email });
  if (userExists) {
    return res.status(409).json({ message: "User already exists!" });
  }

  // Make the model
  const staff = new StaffDB({
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  });

  staff
    .save(staff)
    .then((data) => {
      let emailList = [data.email];

      // Sending Email to the staff member that added as staff member
      const regDate = moment().add(5, "s").format();
      new MailSender(
        emailList,
        regDate,
        "Administrator",
        "staffAdd",
        ""
      ).sendEmail();

      return res
        .status(208)
        .json({ message: `${data.role} added successfully`, data });
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message || "Some error ocurred",
      });
    });
};

// Controller function for fogot password
export const forgotPassword = async (req, res, next) => {
  // 1) get user based on POSTed email
  const user = await RegisteredDB.findOne({ email: req.body.email });
  if (!user) {
    return res
      .status(404)
      .json({ message: "There is no user with this email" });
  }

  // 2) Generate the random reset token
  const resetToken = createPasswordResetToken(user);
  //   Save this doc to the database
  // turn off all the validators
  await user.save({ validateBeforeSave: false });

  // 3) send it to user's email
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/user/resetPassword/${resetToken}`;

  const message = `Reset You password from here: ${resetURL}.\nIf you did'nt forget your password please ignore this..`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token.Valid only for 10 mins",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token sent to email",
    });
  } catch (err) {
    // In any case of error reset these
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return res
      .status(500)
      .json({ message: "Somthing error  occured with sending email" });
  }
};

// Function for  create reset password token
const createPasswordResetToken = (user) => {
  const resetToken = crypto.randomBytes(32).toString("hex");

  user.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  logger.info({ resetToken }, this.passwordResetToken);
  // will be expired after 10 mins
  user.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  // we need to send the plain text via email
  return resetToken;
};

// Controller function for reset password
export const resetPassword = async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await RegisteredDB.findOne({
    passwordResetToken: hashedToken,
    // Check whether the link has expired
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If the token has not expired  , and there is user  , set the new password
  if (!user) {
    return res
      .status(400)
      .json({ message: "Token is invalid or has expired!" });
  }

  logger.error("ERROR POINT");
  logger.info(hashedPW);
  //   Update the password
  user.password = await bcrypt.hash(req.body.password, 10);
  // user.passwordConfirm = req.body.passwordConfirm;

  //   delete the passwordResetToken
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  //   save the modified doc
  await user.save();
  // 3) update ChangedPasswordAt property for the user
  // 4) log the user in , send JWT
  // createSendToken(user, 200, res);
  res.status(200).json({ message: "Password update successful" });

  next();
};

// update the logged user password
export const updatePassword = async (req, res, next) => {
  // 1) get the user from the collection
  const user = await RegisteredDB.findById(req.user.id);

  // 2) check if the POSTed current password is correct
  if (!(await bcrypt.compare(req.body.passwordCurrent, user.password))) {
    return res.status(401).json({ message: "Your current password is wrong!" });
  }
  // 3) If so , update the password
  user.password = await bcrypt.hash(req.body.password, 10);
  // user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  // 4) log user in , send the JWT
  res.status(200).json({ message: "Password change successfull" });
};

// Function for update database after the uploading photo
export const updatePhotoData = async (req, res) => {
  const userID = req.user.id; // Getting user id from the cookie

  // getting user object from the database
  const user = await RegisteredDB.findByIdAndUpdate(
    userID,
    { photo: req.file.filename },
    { new: true }
  );
  if (!user) {
    res.status(404).json({ message: "Profile picture update failed" });
  } else {
    res.status(200).json({ message: "User update successfull", user });
  }
};

// Function for submissions
export const submission = async (req, res) => {
  // Get submission
  const submissionNo = req.body.submission;
  // Get user ID
  const userID = req.user.id;
  // Get submitted  file name
  const fileName = req.file.filename;

  // Getting and update user from the data base
  const user = await RegisteredDB.findById(userID);

  if (!user) {
    res.status(404).json({ message: "Error while retrieving user" });
  } else {
    // Set submitted file name
    if (submissionNo == 1) {
      user.submission1 =
        fileName; /**@ToDo Set registered user submission models */
    } else if (submissionNo == 2) {
      user.submission2 = fileName;
    } else if (submissionNo == 3) {
      user.submission3 = fileName;
    } else if (submissionNo == 4) {
      user.submission4 = fileName;
    } else if (submissionNo == 5) {
      user.submission5 = fileName;
    } else if (submissionNo == 6) {
      user.submission6 = fileName;
    } else if (submissionNo == 7) {
      user.submission7 = fileName;
    }
    /**@ToDo Add other submisions */

    user.save();
    res.status(200).json({ message: "User update successfull", user });

    // Send email to  the submission
    const regDate = moment().add(5, "s").format();
    new MailSender(user.email, regDate, "admin", "submission", "").sendEmail();
  }
};
