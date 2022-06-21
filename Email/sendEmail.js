import { MailSender } from "./mailSender.js";
import moment from "moment";

// Give the mail addresses as strings seperated by commas
let emailList = ["ishanmaduranga271@gmail.com", "e18173@eng.pdn.ac.lk"];

// Task 01
const regDate = moment().add(1, "m").format();
new MailSender(emailList, regDate).sendEmail();

// Task 02
const newRegDate = moment(regDate).add(1, "m").format();
new MailSender(["ishanmaduranga271@gmail.com"], newRegDate).sendEmail();
