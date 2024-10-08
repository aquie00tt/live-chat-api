import express from "express"; // Importing the Express framework
import cors from "cors"; // Importing CORS middleware
import helmet from "helmet"; // Importing Helmet for security
import logger from "./utils/logger"; // Importing the configured logger
import configuration from "./utils/configuration"; // Importing application configuration
import type { Server } from "http"; // Importing the Server type from HTTP module
import routes from "./routes/routes"; // Importing application routes
import notFound from "./middlewares/notFound"; // Importing middleware for handling not found errors
import globalError from "./middlewares/globalError"; // Importing global error handling middleware
import morgan from "morgan"; // Importing Morgan for HTTP request logging

// Creating an Express application instance
const app = express();

/**
 * CORS Middleware
 * Configures Cross-Origin Resource Sharing for the application.
 * Allows requests from specified origins and supports various HTTP methods.
 */
app.use(
	cors({
		origin: configuration.ALLOW_LIST, // Specifies allowed origins
		methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
		optionsSuccessStatus: 204, // Status for successful OPTIONS requests
	}),
);

/**
 * HTTP Security Middleware
 * Uses Helmet to set various HTTP headers for security enhancements.
 */
app.use(helmet());

/**
 * JSON Parsing Middleware
 * Parses incoming requests with JSON payloads.
 */
app.use(express.json());

/**
 * URL Encoded Parsing Middleware
 * Parses incoming requests with URL-encoded payloads.
 * The `extended` option allows for rich objects and arrays to be encoded into the URL.
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Logger Middleware
 * Logs HTTP requests to the console using Morgan.
 * Uses "dev" format in development mode and "combined" format in other environments.
 */
app.use(
	morgan(
		configuration.NODE_ENV === "development"
			? "dev"
			: "combined",
	),
);

/**
 * Routes Middleware
 * Mounts the application routes.
 */
app.use(routes);

/**
 * Not Found Error Middleware
 * Handles requests to undefined routes by passing a NotFoundError to the next middleware.
 */
app.use(notFound);

/**
 * Global Error Handling Middleware
 * Catches any errors thrown in the application and returns a structured JSON response.
 */
app.use(globalError);

/**
 * Initialize and start the server
 *
 * @param port - The port the server will listen on (defaults to the configured PORT).
 * @returns Server - The server instance.
 */
export function initServer(
	port: number = configuration.PORT, // Default to the configured port if none provided
): Server {
	return app.listen(port, () =>
		logger.info(
			`Server is listening at http://localhost:${port.toString()}`, // Log the server listening message
		),
	);
}

// Exporting the Express application instance for external use
export default app;
