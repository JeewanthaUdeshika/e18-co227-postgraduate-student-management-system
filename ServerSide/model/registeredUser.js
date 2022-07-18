/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 *
 * This file contains all the mongoDB schemas
 */

import mongoose from "mongoose";

// Shape of the user document
const userSchema = new mongoose.Schema({
  nameWithInitials: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
    unique: true,
  },
  postalAddress: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  telNo: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  supervisors: {
    type: Array,
    default: [],
  },
  role: {
    type: String,
    enum: [
      "admin",
      "student",
      "supervisor",
    ] /**@Todo This should be updated as you want */,
  },
  RegisteredDate: {
    type: Date,
  },
  regNo: {
    type: String,
    default: "Not Set",
  },
  degree: {
    type: String,
    enum: ["PhD", "MPhil", "Msc", "MEng", "Provisional"],
  },
  studyMode: {
    type: String,
    enum: ["Full", "Part"],
  },
  researchTopic: {
    type: String,
  },
  completionYear: {
    type: Number,
  },
  progressLevel: {
    type: String,
    enum: [
      "Half Year Progress Report Submitted",
      "Annual Progress Report Submitted",
      "Annual Oral Presentation Completed",
      "Viva Completed",
      "Thesis Submitted for Review",
      "Final Thesis Submitted",
    ],
  },
  dateofLastSubmission: {
    type: Date,
  },
  URLtoWebsite: {
    type: String,
  },
  passwordResetToken: {
    type: String,
  },
  passwordResetExpires: {
    type: Date,
  },
  photo: {
    type: String,
  },
});

// Make the document model
export const RegisteredDB = mongoose.model("registereduser", userSchema);
