import Bree from "bree";
import moment from "moment";

class TaskScheduler extends Bree {
  constructor(regDate) {
    super({
      jobs: [
        {
          name: "sendEmail", //Name of the file to be executed
          // cron: "* * * * *", //Run the every minute
          timeout: `at ${moment(regDate).add(1, "m").format("HH:mm:ss")}`,
          // timezone: 0,
          worker: {
            workerData: {
              description: "This job will send emails.",
            },
          },
        },
      ],
    });
  }
}

export { TaskScheduler };
