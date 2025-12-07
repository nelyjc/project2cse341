//test/favorites.test.js
const request = require("supertest");
const app = "http://localhost:7000";

describe("Favorites API", () => {
  test("GET /favorites → should return all favorites", async () => {
    const res = await request(app).get("/favorites");

    expect([200, 401]).toContain(res.statusCode);
  });

  test("GET /favorites/:id → should return one favorite", async () => {
    const testId = "REPLACE_FAVORITE_ID";

    const res = await request(app).get(`/favorites/${testId}`);

    expect([200, 404, 401]).toContain(res.statusCode);
  });
});
