import winston from "winston";

/**
 * Configures a logger using the Winston logging library.
 *
 * This logger will output log messages to the console with a specific format.
 */
const logger = winston.createLogger({
	// Specifies the transport mechanism for the logger (console in this case).
	transports: [new winston.transports.Console()],

	// Combines different formatting options for log messages.
	format: winston.format.combine(
		// Adds color to log messages for better readability in the console.
		winston.format.colorize(),

		// Adds a timestamp to each log message.
		winston.format.timestamp(),

		// Custom formatting for the log messages, combining timestamp, level, and message.
		winston.format.printf(
			({ timestamp, level, message }) => {
				// Formats the log message to include the timestamp, log level, and the actual message.
				return `${timestamp} ${level} ${message}`;
			},
		),
	),
});

// Exports the configured logger instance for use throughout the application.
export default logger;
