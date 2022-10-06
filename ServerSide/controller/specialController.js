/**
 * E / 18 / 173
 * Author - Kasthuripitiya K.A.I.M.
 * Date - 01 / 08 / 2022
 */

import { registeredUser, UserDB } from "../model/user.js";
import { RegisteredDB } from "../model/registeredUser.js";
import { StaffDB } from "../model/staff.js";
export const getAllStudents = async (req, res, next) => {
  // retrieve all the users from the database
  const users = await UserDB.aggregate([
    {
      $match: {
        state: "not approved",
      },
    },
    {
      $project: {
        fullName: 1,
        kind: 1,
      },
    },
  ]);

  //   check the retuned object is null and undefined
  if (!users) {
    return res.status(400).json({
      status: "error",
      message: "no users found",
    });
  }

  //   If the users object is not null or undefined
  return res.status(200).json({
    status: "success",
    users,
  });
  // go to the next middleware
  next();
};

export const getUser = async (req, res) => {
  // Get user id from the link
  const userID = req.params.id;
  console.log(`get user ${userID}`);
  // Get user from the userdata base without password
  const user = await UserDB.findById(userID, "-password");

  if (user) {
    // res.render("unRegUser", { userData: user });
    // console.log(user);
    return res.status(200).json(user);
    //return res.status(200).json(user);
  } else {
    return res.status(404).json({ message: "User not found" });
  }
};

export const getAllDetails = async (req, res, next) => {
  // retrieve all the users from the database
  const users = await RegisteredDB.find().select("-password");

  //   check the retuned object is null and undefined
  if (!users) {
    return res.status(400).json({
      status: "error",
      message: "no users found",
    });
  }

  //   If the users object is not null or undefined
  return res.status(200).json({
    status: "success",
    users,
  });
  // go to the next middleware
  next();
};

export const AllStudentsToBeReviewed = async (req, res, next) => {
  // console.log(req.user.id);

  const usersWithRelevantNames = [];

  // This will get the all the details of the relevant supervisor
  const usersToBeReviewed = await StaffDB.findById(req.user.id);

  // If no users found then returns an error
  if (!usersToBeReviewed) {
    return res.status(400).json({
      status: "error",
      message: "No User Found",
    });
  }

  // console.log(usersToBeReviewed.students);
  for (let count = 0; count < usersToBeReviewed.students.length; count++) {
    // This returns an array of objects

    // Filter the fullName field Only , by default _id field is there
    const nameOfTheUser = await RegisteredDB.findOne(
      {
        _id: usersToBeReviewed.students[count],
      },
      "fullName"
    );

    // Create a new Object and add the new Property supervisor id to it
    const details = {
      _id: nameOfTheUser._id,
      fullName: nameOfTheUser.fullName,
      supervisorId: req.user.id,
    };

    // console.log(details);

    // push the fullName of the user to the Names Array
    usersWithRelevantNames.push(details);
  }

  // console.log(usersWithRelevantNames);

  return res.status(200).json({
    status: "success",
    usersWithRelevantNames,
  });

  next();
};

export const submitReview = async (req, res, next) => {
  console.log(req.body);

  return res.status(200).json({
    status: "success",
    message: req.body,
  });

  next();
};
