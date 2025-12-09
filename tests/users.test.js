//tests/favorites.test.js
const request = require("supertest");
const app = require("../server");

describe("Users API", () => {
  test("GET /user → should return all users", async () => {
    const res = await request(app).get("/user");
    expect([200]).toContain(res.statusCode);
  });

  test("GET /user/:id → should return one user", async () => {
    const testId = "676abcd12345def678901234"; // replace if needed
    const res = await request(app).get(`/user/${testId}`);
    expect([200, 404]).toContain(res.statusCode);
  });
});
