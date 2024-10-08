import type { Request, Response } from "express";
import HomeController from "../controllers/v1/HomeController";
import type { IMessageResponse } from "../types/response";

/**
 * Handler function for the home route.
 * This function responds to incoming requests by retrieving a welcome message
 * from the HomeController and returning it as a JSON response.
 *
 * @param req - The HTTP request object containing information about the request.
 * @param res - The HTTP response object used to send back the desired HTTP response.
 * @returns A JSON response containing a welcome message and a status code of 200.
 */
export default function getHome(
	req: Request,
	res: Response,
): Response<IMessageResponse> {
	// Retrieve the welcome message from the HomeController
	const response = HomeController.get();

	// Send the response with a status code of 200 and the welcome message as JSON
	return res.status(200).json(response);
}
