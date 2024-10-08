import type {
	NextFunction,
	Request,
	Response,
} from "express";
import BaseError from "../errors/BaseError";
import type { IMessageResponse } from "../types/response";

/**
 * Global error handling middleware.
 * Catches any error thrown in the application and returns a JSON response
 * with the error's status and message.
 *
 * @param err - The error object, an instance of BaseError.
 * @param req - The HTTP request object.
 * @param res - The HTTP response object.
 * @param next - The next middleware function (required by Express but not used).
 */
export default function globalError(
	err: BaseError,
	req: Request,
	res: Response,
	// eslint-disable-next-line
	next: NextFunction,
): Response<IMessageResponse> {
	// Respond with a status code and JSON containing the error details
	return res.status(err.statusCode).json({
		status: err.status,
		error: err.message,
	});
}
