//test.users.test.js
const request = require("supertest");
const app = "http://localhost:7000";

describe("Users API", () => {
  test("GET /user → should return all users", async () => {
    const res = await request(app).get("/user");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /user/:id → should return one user", async () => {
    const testId = "REPLACE_USER_ID";

    const res = await request(app).get(`/user/${testId}`);

    expect([200, 404]).toContain(res.statusCode);
  });
});
