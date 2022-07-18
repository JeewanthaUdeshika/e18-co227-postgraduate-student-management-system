/**
 * CO227 - PG Student Management System
 * Author: Jeewantha Ariyawansha
 *
 * This file contains the all the user authorization methods using PassportJS including google OAuth2 methods
 */
import local from "passport-local";
import bcrypt from "bcrypt";
import google from "passport-google-oauth2";
import { RegisteredDB } from "../model/registeredUser.js";
import { StaffDB } from "../model/staff.js";

// Getting strategy methods from passport modules
const LocalStrategy = local.Strategy;
const GoogleStrategy = google.Strategy;

// Method o initalize the passport module
export const initalizePassport = (passport) => {
  // Function to get and  confirm  the students with local login
  const authenticateStudent = async (email, password, done) => {
    // Getting  the given user from the database
    const user = await RegisteredDB.findOne({ email: email });

    // console.log(password);
    // console.log(user.id);

    // If there is no user with given email
    if (!user) {
      return done(null, false, { message: "No user with given  email" });
    }

    // If there is user with given email compare the given password with database
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect username or password" });
      }
    } catch (error) {
      return done(error);
    }
  };

  // Function to authenticate staff using google authentication
  const authenticateStaff = async (
    req,
    accessToken,
    refreshToken,
    profile,
    done
  ) => {
    // Getting user from the staff data base
    const staff = await StaffDB.findOne({ email: profile.email });

    if (!staff) {
      return done(null, false, {
        message:
          "There is no user with that email, Contact administrator to add as a staff member",
      });
    }
    return done(null, staff);
  };

  // For the local login
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      authenticateStudent
    )
  );

  // For the google login
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3001/auth/google/callback",
        passReqToCallback: true,
      },
      authenticateStaff
    )
  );

  // Method to add user to the cookie
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Method to get data from the cookie
  passport.deserializeUser(async (id, done) => {
    // Check data for student and staff database
    const student = await RegisteredDB.findById(id);
    const staff = await StaffDB.findById(id);

    let user;
    // If user is student
    if (student) {
      user = student;
    } else if (staff) {
      user = staff;
    }

    return done(null, user);
  });
};
