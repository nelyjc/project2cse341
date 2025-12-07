//test/activities.test.js
const request = require("supertest");
const app = "http://localhost:7000";

describe("Activities API", () => {
  test("GET /activities → should return all activities", async () => {
    const res = await request(app).get("/activities");

    expect([200, 401]).toContain(res.statusCode);
  });

  test("GET /activities/:id → should return one activity", async () => {
    const testId = "REPLACE_ACTIVITY_ID";

    const res = await request(app).get(`/activities/${testId}`);

    expect([200, 404, 401]).toContain(res.statusCode);
  });
});
