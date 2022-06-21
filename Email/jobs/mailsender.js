/**
 * E / 18 / 173
 * Kasthuripitiya K.A.I.M.
 * Automated Mail Sender
 * 17/06/2022
 */

// import { workerData } from "worker_threads";
import moment from "moment";
import nodemailer from "nodemailer";
import "dotenv/config"; //Read the .env file

class MailSender {
  // Constructor to set the email list
  constructor(emailList) {
    this.emailList = emailList;
  }

  async sendEmail() {
    console.log(moment().format("HH:mm:ss"));

    //All the security_configs are in a seperate file for security purposes
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.HOSTPORT,
      secure: false,
      service: process.env.SERVICE,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.PASSWORD,
      },
    });

    const mailConfigurations = {
      // It should be a string of sender email
      from: `Ishan Maduranga ${process.env.EMAIL_USERNAME}`,

      // Comma Separated list of mails
      bcc: this.emailList,

      // send the list as bcc or cc
      // bcc: secure_configuration.EMAIL_LIST_BCC,
      // cc: secure_configuration.EMAIL_LIST_CC,

      // Subject of Email
      subject: "Sending Email using Node.js",

      // This would be the text of email body
      text:
        "Hi! There, You know I am using the" +
        " NodeJS Code along with NodeMailer " +
        "to send this email.",

      attachments: [
        {
          filename: "test.txt",
          content: "Hello, Mail For Testing",
        },
      ],
    };

    // verify connection configuration
    await transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");

        if (mailConfigurations.bcc.length !== 0) {
          //
          console.log("Email list is not empty!");

          //
          //console.log(workerData.description);

          // Send Mail to the given list of mails , if sending fails log it to the console
          transporter.sendMail(mailConfigurations, (err, info) => {
            if (err) throw err;
            console.log("Email Sent Successfully");
            console.log(info);
          });
        } else {
          console.log("Email list empty");
        }
      }
    });
  }
}

// module.exports = MailSender;
export { MailSender };
