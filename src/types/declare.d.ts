/**
 * Extend the NodeJS global namespace to include custom types for environment variables.
 */
declare global {
	namespace NodeJS {
		/**
		 * Interface representing the shape of the process.env object.
		 */
		interface ProcessEnv {
			/**
			 * The environment in which the application is running (test, development, production).
			 */
			NODE_ENV: "test" | "development" | "production";
			/**
			 * The port number on which the application will run.
			 */
			PORT: string;
			/**
			 * A comma-separated list of allowed origins for CORS.
			 */
			ALLOW_LIST: string;
			/**
			 * The version of the API being used.
			 */
			API_VERSION: string;
		}
	}
}

/**
 * Ensure this file is treated as a module.
 */
export {};
