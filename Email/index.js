const MailSender = require("./mailsender");

// Give the mail addresses as strings seperated by commas
let emailList = [];
const mailsender = new MailSender(emailList);

mailsender.sendEmail();
