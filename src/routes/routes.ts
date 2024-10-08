import {
	Router,
	type Request,
	type Response,
} from "express";
import configuration from "../utils/configuration";
import getHome from "./homes";

// Create a new instance of the Express router
const router = Router();

// Define the base URL for the API, including the version from configuration
const baseUrl = `/api/v${configuration.API_VERSION}`;

/**
 * Redirects the root URL of the API to the base URL.
 * When a GET request is made to the root, it responds with a redirect
 * to the versioned API base URL.
 *
 * @param req - The HTTP request object containing request details.
 * @param res - The HTTP response object used to send back the desired response.
 */
router.get("/", (req: Request, res: Response) => {
	return res.redirect(baseUrl);
});

/**
 * Route handler for the base URL.
 * This route responds to GET requests made to the base URL by invoking the
 * getHome function, which retrieves the welcome message.
 *
 * @param req - The HTTP request object containing request details.
 * @param res - The HTTP response object used to send back the desired response.
 */
router.get(baseUrl, getHome);

// Export the router instance for use in the main application
export default router;
