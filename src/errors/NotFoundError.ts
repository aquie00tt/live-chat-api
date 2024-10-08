import BaseError from "./BaseError";

/**
 * NotFoundError class extends the BaseError class.
 * This error is thrown when a requested resource cannot be found.
 */
export default class NotFoundError extends BaseError {
	/**
	 * Constructor for NotFoundError.
	 *
	 * @param message - A descriptive message for the error. Defaults to "Not Found".
	 */
	public constructor(message = "Not Found") {
		// Call the parent constructor with the message and a status code of 404.
		super(message, 404);
	}
}
