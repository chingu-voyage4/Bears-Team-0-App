const request = require("supertest");
const api = require("../../server")

describe("User Routes", () => {

  describe("/GET users", async () => {
    let data;

    beforeAll(async () => {
      data = await request(api).get("/api/users").expect(200);
    });
    
    test("Should return an array", () => {
      expect(data).toBeInstanceOf(Array);
    });
  });
});