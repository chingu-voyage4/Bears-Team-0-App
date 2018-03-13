const request = require("supertest");
const api = require("../../server");

describe("Quiz Routes", () => {
    test("/GET quizzes", async() => {
        const response = await request(api).get('/quizzes/count');
        expect(response.statusCode).toBe(200);
    });
});