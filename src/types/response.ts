import type { Status } from "./Status";

/**
 * Interface representing a standard message response structure.
 */
export interface IMessageResponse {
	/**
	 * A message string conveying information or status.
	 */
	message: string;
}

/**
 * Interface representing a standard error response structure.
 */
export interface IErrorResponse {
	/**
	 * The status of the response, indicating success or failure.
	 */
	status: Status;

	/**
	 * A string providing details about the error that occurred.
	 */
	error: string;
}
