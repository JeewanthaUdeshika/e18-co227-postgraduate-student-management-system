const MailSender = require("./index");

// Give the mail addresses as strings seperated by commas
let EMAIL_LIST = [];
const mailsender = new MailSender(EMAIL_LIST);

mailsender.sendEmail();
