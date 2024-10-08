import request from "supertest"
import app from "../src/app";

describe("Middlewares Test", () => {
    test("Not Found Error", async() => {
        const response = await request(app).get("/test/notfound");

        expect(response.statusCode).toBe(404);
        expect(response.body.status).toBe("fail");
    })
})