/**
 * CO227 - PG Student Management System
 * Author:  Jeewantha Ariyawansha
 *          Ishan Kasthuripitiya 
 * 
 * This file contains the multer storages for different uploads
 */
import multer from 'multer';
import path from 'path';

////////////// User Documents //////////////////////
// Set storage to the user documents
const userDocStore = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/userDocs')
    },
    filename: (req, file, cb) => {
        // Get the file extension
        // {image/jpeg}
        console.log(file.mimetype);
        // cb(null) means if there is no error
        cb(null, `userDocs-${req.body.email}-${Date.now()}` + path.extname(file.originalname));
      },
  })
   
export const userDocUpload = multer({ storage: userDocStore });

////////////// student submissions //////////////////////
const submissionStore = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/submissions/submitted')
  },
  filename: (req, file, cb) => {
      // Get the file extension
      // {image/jpeg}
      console.log(file.mimetype);
      // cb(null) means if there is no error
      cb(null, `userDocs-${req.user.id}-${Date.now()}` + path.extname(file.originalname));
    },
})
 
export const studentSubmission = multer({ storage: submissionStore });