/**
 * E / 18 / 173
 * Author - Kasthuripitiya K.A.I.M.
 * Date - 01 / 08 / 2022
 */

import { UserDB } from "../model/user.js";
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

  const usersToBeReviewed = await StaffDB.findById(req.user.id);

  // console.log(usersToBeReviewed);

  if (!usersToBeReviewed) {
    return res.status(400).json({
      status: "error",
      message: "No User Found",
    });
  }

  return res.status(200).json({
    status: "success",
    usersToBeReviewed,
  });

  next();
};
