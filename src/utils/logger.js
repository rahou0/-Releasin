const { format, createLogger, transports } = require("winston");
const { timestamp, combine, errors, json } = format;

const logger = createLogger({
  level: "info",
  format: combine(timestamp(), errors({ stack: true }), json()),
  transports: [
    new transports.File({ filename: "error.txt", level: "error" }),
    new transports.File({ filename: "combined.txt" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  const logFormat = format.printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
  });
  logger.add(
    new transports.Console({
      format: combine(
        format.colorize(),
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        errors({ stack: true }),
        logFormat
      ),
    })
  );
}

module.exports = logger;
