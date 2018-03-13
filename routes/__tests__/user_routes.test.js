const request = require("supertest");
const api = require("../../server");

describe("User Routes", () => {

  describe("/GET users", async () => {
    
    test("GET all users", async() => {
      const response = await request(api).get('/api/users/count');
      expect(response.statusCode).toBe(200);
    });

  });

});

// let data;

    // beforeAll(async () => {
    //   data = await request(api).get("/api/users/").expect(200);
    // });
    
    // test("Should return an array", (data) => {
    //   console.log(data);
    //   expect(data).toBeInstanceOf(Array);
    // });
    