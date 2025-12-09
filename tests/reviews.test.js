//test reviews.test.js
const request = require("supertest");
const app = require("../server");

describe("Reviews API", () => {
  test("GET /reviews → should return 200 OK", async () => {
    const res = await request(app).get("/reviews");
    expect(res.statusCode).toBe(200);
  });

  test("GET /reviews/:id → should return 200 OR 404", async () => {
    const testId = "676abcd12345def678901234";
    const res = await request(app).get(`/reviews/${testId}`);
    expect([200, 404]).toContain(res.statusCode);
  });
});
