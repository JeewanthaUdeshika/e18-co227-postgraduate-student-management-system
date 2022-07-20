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
  },
  postalAddress: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
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
    enum: ["phd", "mphill", "msc", "meng", "provisional"],
  },
  studyMode: {
    type: String,
    enum: ["fullTime", "partTime"],
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
      "halfYearReportSubmitted",
      "annualProgressReportSubmitted",
      "annualOralPresentationSubmitted",
      "vivaCompleted",
      "thesisSubmittedForReview",
      "finalThesisSubmitted",
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
