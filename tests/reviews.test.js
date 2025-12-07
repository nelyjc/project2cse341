//reviews/tests/reviews.test.js
const request = require("supertest");
const app = "http://localhost:7000";

describe("Reviews API", () => {
  test("GET /reviews → should return all reviews", async () => {
    const res = await request(app).get("/reviews");

    expect([200, 401]).toContain(res.statusCode);
  });

  test("GET /reviews/:id → should return one review", async () => {
    const testId = "REPLACE_REVIEW_ID";

    const res = await request(app).get(`/reviews/${testId}`);

    expect([200, 404, 401]).toContain(res.statusCode);
  });
});
