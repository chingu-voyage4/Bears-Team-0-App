const request = require("supertest");
const api = require("../../server");

const TEST_USER_ID = "testUserId";
let testQuizId = "";

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
            console.log(response.body.count);
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

        //create
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
            testQuizId = quizCreated._id;
            console.log(testQuizId);

            expect(response.statusCode).toBe(200);
            expect(quizCreated).toBeInstanceOf(Object);
            expect(Object.keys(quizCreated)).toEqual(['_id', 'title', 'author', 'questions', 'description', 'favorites']);
            expect(quizCreated.author).toEqual(TEST_USER_ID);
            
        });

        //update quiz title

        //update favorites

        //read

        //delete
        it("deletes a quiz by id", async () => {
            const response = await request(api).delete("/api/quizzes/" + testQuizId);
            expect(response.statusCode).toBe(200);
            console.log(response.body);
        });

});