import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.HOSTPORT,
    // secure: false,
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.PASSWORD,
    },
  });

  // 2) Define email options
  const mailOptions = {
    from: `Ishan Maduranga <ishan@ishan.io>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  // 3) send the email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
