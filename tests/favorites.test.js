//tests/favorites.test.js
const request = require("supertest");
const app = require("../server");

describe("Favorites API", () => {
  test("GET /favorites → should return 200 OK", async () => {
    const res = await request(app).get("/favorites");
    expect(res.statusCode).toBe(200);
  });

  test("GET /favorites/:id → should return 200 OR 404", async () => {
    const testId = "676abcd12345def678901234";
    const res = await request(app).get(`/favorites/${testId}`);
    expect([200, 404]).toContain(res.statusCode);
  });
});
