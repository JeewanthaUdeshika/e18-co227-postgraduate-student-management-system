/**
 * This is for unit testing in the application
 */

import { createLogger, transports } from "winston";

const logger = createLogger({
  level: "debug",
  transports: [new transports.File({ filename: "test.log" })],
});

export default logger;
