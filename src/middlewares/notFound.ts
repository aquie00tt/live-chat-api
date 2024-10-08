import type {
	Request,
	Response,
	NextFunction,
} from "express";
import NotFoundError from "../errors/NotFoundError";

/**
 * Middleware function to handle 404 Not Found errors.
 * This function is called when a requested resource is not found.
 *
 * @param req - The HTTP request object.
 * @param res - The HTTP response object.
 * @param next - The next middleware function in the Express stack.
 */
export default function notFound(
	req: Request,
	res: Response,
	next: NextFunction,
): void {
	// Pass a detailed NotFoundError to the next middleware, indicating the missing resource
	return next(
		new NotFoundError(
			`The requested resource at ${req.originalUrl} could not be found on this server.`,
		),
	);
}
