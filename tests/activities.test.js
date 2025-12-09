const request = require("supertest");
const app = require("../server");

describe("Activities API", () => {

  test("GET /activities → should return 200 OK (public route)", async () => {
    const res = await request(app).get("/activities");
    expect(res.statusCode).toBe(200);
  });

  test("GET /activities/:id → should return 200 or 404 (public route)", async () => {
    const testId = "676abcd12345def67890123a"; // valid ObjectId format
    const res = await request(app).get(`/activities/${testId}`);
    expect([200, 404]).toContain(res.statusCode);
  });

});
