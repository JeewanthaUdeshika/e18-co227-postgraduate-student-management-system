/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 *
 * This file contains all the mongoDB schemas
 */

import mongoose from "mongoose";

const options = { discriminatorKey: "kind" };

// Shape of the user document
const userSchema = new mongoose.Schema(
  {
    nameWithInitials: {
      type: String,
      required: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
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
    state: {
      type: String,
      enum: ["approved", "not approved"],
      default: "not approved",
    },
  },
  options
);

// Make the document model
export const UserDB = mongoose.model("userData", userSchema);

// Schema for the registered students
const registeredSchema = new mongoose.Schema({
  regNo: {
    type: String,
    default: "Not Set",
  },
  DOR: {
    type: Date,
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
    type: String,
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
});

const prospectiveSchema = new mongoose.Schema({
  researchArea: {
    type: String,
    required: true,
  },
  researchProgram: {
    type: String,
    enum: ["phd", "mphill"],
  },
});

// Model  for registered students
export const registeredUser = UserDB.discriminator(
  "Registered",
  registeredSchema,
  options
);
// Model for prospective students
export const prospectiveUser = UserDB.discriminator(
  "Prospective",
  prospectiveSchema,
  options
);

/* // Discrimination of the registerStatus
userSchema.path('regState').discriminator('Registered' ,registeredSchema);
userSchema.path('regState').discriminator('Prospective' ,prospectiveSchema);
 */
