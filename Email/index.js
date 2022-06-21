import moment from "moment";
import { TaskScheduler } from "./taskScheduler.js";
const time = moment().format();
console.log(moment(time).format("HH:mm:ss"));
const mytask = new TaskScheduler(time);

// Start all the tasks
mytask.start();
