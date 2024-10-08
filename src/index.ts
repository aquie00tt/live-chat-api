import type { Server } from "http"; // Importing the Server type from the HTTP module
import { initServer } from "./app"; // Importing the function to initialize the server from the app module

/**
 * Main function to start the server.
 *
 * @returns Server - The server instance created by initServer.
 */
function main(): Server {
	return initServer(); // Initialize and start the server
}

// Calling the main function to start the server and store the server instance
const server = main();

// Handle termination signal (SIGINT) for graceful shutdown
process.on("SIGINT", () => {
	server.close(); // Close the server to stop accepting new connections
	process.exit(0); // Exit the process with a success status code
});
