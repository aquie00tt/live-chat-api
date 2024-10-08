import { config } from "dotenv";

/**
 * Custom error class for handling missing environment variables.
 *
 * This class is used to throw a clear, descriptive error when a required
 * environment variable is not defined.
 */
class MissingEnvironmentVariableError extends Error {
	/**
	 * Constructor for the MissingEnvironmentVariableError.
	 *
	 * @param variableName - The name of the missing environment variable.
	 */
	constructor(variableName: string) {
		super(
			`${variableName} environment variable is not defined. Please ensure it's set before running the application.`,
		);
		this.name = this.constructor.name;
		Error.captureStackTrace(this, this.constructor);
	}
}

/**
 * Ensure the NODE_ENV environment variable is set.
 * If not, throws a MissingEnvironmentVariableError.
 */
if (!process.env.NODE_ENV) {
	throw new MissingEnvironmentVariableError("NODE_ENV");
}

/**
 * Load environment variables based on the current NODE_ENV.
 * This will load variables from a specific `.env.<NODE_ENV>` file.
 */
config({ path: `.env.${process.env.NODE_ENV}` });

/**
 * Ensure the PORT environment variable is set and is a valid port number.
 * Throws an error if the value is not valid.
 */
if (!process.env.PORT) {
	throw new MissingEnvironmentVariableError("PORT");
}

const port = Number(process.env.PORT);

if (isNaN(port) || port < 0 || port > 65535) {
	throw new Error(
		`Invalid port number: ${process.env.PORT}. Port must be a number between 0 and 65535.`,
	);
}

/**
 * Ensure the ALLOW_LIST environment variable is set.
 * Splits the comma-separated list into an array for further use.
 */
if (!process.env.ALLOW_LIST) {
	throw new MissingEnvironmentVariableError("ALLOW_LIST");
}

const allowArray = process.env.ALLOW_LIST.split(",");

/**
 * Ensure the API_VERSION environment variable is set.
 */
if (!process.env.API_VERSION) {
	throw new MissingEnvironmentVariableError("API_VERSION");
}

/**
 * Configuration object that stores the parsed environment variables.
 */
const configuration = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: port,
	ALLOW_LIST: allowArray,
	API_VERSION: process.env.API_VERSION,
};

export default configuration;
