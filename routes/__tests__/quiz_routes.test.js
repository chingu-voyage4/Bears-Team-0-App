const request = require("supertest");
const api = require("../../server");

describe("Quiz Routes", () => {

        it("gets all quizzes", async () => {
            const response = await request(api).get('/api/quizzes/all');
            expect(response.statusCode).toBe(200);
            expect(response.body.quizzes).toBeInstanceOf(Array);
        });

        it("gets count of quizzes", async () => {
            const response = await request(api).get("/api/quizzes/count");
            expect(response.statusCode).toBe(200);
            expect(response.body.count).toBeGreaterThanOrEqual(0);
        });

});