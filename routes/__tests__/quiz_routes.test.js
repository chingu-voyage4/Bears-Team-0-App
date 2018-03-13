const request = require("supertest");
const api = require("../../server");

describe("Quiz Routes", () => {
    test("GET all quizzes", async() => {
        const response = await request(api).get('/api/quizzes/all');
        expect(response.statusCode).toBe(200);
        expect(response.body.quizzes).toBeInstanceOf(Array);
    });
});