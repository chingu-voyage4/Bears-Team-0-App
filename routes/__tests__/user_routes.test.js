const request = require("supertest");
const api = require("../../server");

describe("User Routes", () => {

  it("gets all users through route", async () => {
    const response = await request(api).get('/api/users/');
    console.warn(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body.users).toBeInstanceOf(Array);
  });

});

    
// describe("/GET users", async () => {
    
//   test("GET all users", async() => {
//     const response = await request(api).get('/api/users/count');
//     expect(response.statusCode).toBe(200);
//   });

// });