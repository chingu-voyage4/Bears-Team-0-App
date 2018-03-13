const request = require("supertest");
const api = require("../../server");

const TEST_USER_ID = "testUserId"

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

        it("gets a user's quizzes by user id", async () => {
            const response = await request(api).post("/api/quizzes/userQuizzes")
                .send({
                    "user": {
                        "id": TEST_USER_ID
                    }
                });
            expect(response.statusCode).toBe(200);
            expect(response.body.quizzes).toBeInstanceOf(Array);
        });

        it("create a new quiz", async () => {
            const response = await request(api).post("/api/quizzes/")
                .send({
                    "quiz": {
                        "title": "test title",
                        "description": "this is a test description for a test quiz.",
                        "questions": ["test question 1", "test question 2"]
                    },
                    "user": {
                        "id": TEST_USER_ID
                    }
                });

            const quizCreated = response.body.quiz;

            expect(response.statusCode).toBe(200);
            expect(quizCreated).toBeInstanceOf(Object);
            expect(Object.keys(quizCreated)).toEqual(['title', 'author', 'questions', 'description', 'favorites']);
            expect(quizCreated.author).toEqual(TEST_USER_ID);
        });

});