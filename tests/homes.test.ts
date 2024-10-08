import app from "../src/app";
import HomeController from "../src/controllers/v1/HomeController";
import configuration from "../src/utils/configuration"
import request from "supertest";

describe("Home Route", () => {
    test(`/api/v${configuration.API_VERSION.toString()}`, async() => {
        const response = await request(app).get(`/api/v${configuration.API_VERSION}`);
        expect(response.body.message).toBe(HomeController.get().message);
    })
})