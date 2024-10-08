import type { IMessageResponse } from "../../types/response";

/**
 * HomeController class handles requests for the API's main route.
 * Currently, it provides a simple welcome message.
 */
class HomeController {
	/**
	 * GET method for the main route.
	 * @returns Response containing the welcome message.
	 */
	public get(): IMessageResponse {
		return {
			message: "Welcome To The API", // Simple message returned when the main route is accessed.
		};
	}
}

// Export an instance of HomeController.
export default new HomeController();
