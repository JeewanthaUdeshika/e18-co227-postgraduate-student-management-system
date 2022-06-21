import { MailSender } from "./mailsender.js";

// Give the mail addresses as strings seperated by commas
let emailList = ["ishanmaduranga271@gmail.com", "e18173@eng.pdn.ac.lk"];
const mailsender = new MailSender(emailList);

mailsender.sendEmail();
