import type { Status } from "../types/Status";

/**
 * BaseError class extends the built-in Error class.
 * This class is used for creating application-specific error instances,
 * encapsulating both the error message and an associated HTTP status code.
 */
export default class BaseError extends Error {
	// Holds the status of the error, indicating whether it's a client or server error.
	public status: Status;

	/**
	 * Constructor for BaseError.
	 *
	 * @param message - A descriptive message for the error.
	 * @param statusCode - The HTTP status code associated with the error.
	 */
	public constructor(
		message: string,
		public statusCode: number,
	) {
		// Call the parent constructor with the error message.
		super(message);

		// Set the name of the error to the name of this class.
		this.name = this.constructor.name;

		// Determine the status based on the first digit of the status code.
		this.status = this.statusCode.toString().startsWith("4")
			? "fail" // Indicates a client error.
			: "error"; // Indicates a server error.

		// Capture the stack trace for better debugging.
		Error.captureStackTrace(this, this.constructor);
	}
}
