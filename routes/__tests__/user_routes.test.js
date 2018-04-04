const request = require("supertest");
const api = require("../../server");

describe("User Routes", () => {

  it("gets all users through route", async () => {
    const response = await request(api).get('/api/users/');
    expect(response.statusCode).toBe(200);
    expect(response.body.users).toBeInstanceOf(Array);
  });

  it("gets count of users through route", async () => {
    const response = await request(api).get("/api/users/count");
    expect(response.statusCode).toBe(200);
    expect(response.body.count).toBeGreaterThanOrEqual(0);
    console.log(response.body.count);
  });

});

    
// describe("/GET users", async () => {
    
//   test("GET all users", async() => {
//     const response = await request(api).get('/api/users/count');
//     expect(response.statusCode).toBe(200);
//   });

// });