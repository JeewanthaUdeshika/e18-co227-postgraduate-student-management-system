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

////////////// Profile Picture //////////////////////
// decide the file name and the destination
const photoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img/users');
  },
  filename: (req, file, cb) => {
    // Get the file extension
    // {image/jpeg}
    /* const ext = file.mimetype.split('/')[1]; */
    // cb(null) means if there is no error
    cb(null, `user-${req.user.id}-${Date.now()}` + path.extname(file.originalname));
  },
});

// create a file filter
const photoFilter = (req, file, cb) => {
  // check whether the uploaded file is image
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  }
};

// upload
export const uploadUserPhoto = multer({
  storage: photoStorage,
  fileFilter: photoFilter,
});