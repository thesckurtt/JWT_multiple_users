import { app } from "../../server.js";
import request from "supertest";

describe("Auth Routes", () => {
  beforeAll(async () => {
    await app.ready(); // Ensures that the server is ready
  });

  afterAll(async () => {
    app.close(); // Ensures that the server is close
  });

  describe("Route /auth/login", () => {
    it("should return a token for valid credentials", async () => {
      const credentials = {
        email: "Eden_Nienow@hotmail.com",
        password: "admin",
      };

      const response = await request(app.server)
        .post("/auth/login")
        .send(credentials);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("token");
      expect(typeof response.body.token).toBe("string");
    });
    it("should return 401 for unauthorized access", async () => {
      const credentials = {
        email: "test@mail.com",
        password: "incorrectPassword",
      };

      const response = await request(app.server).post("/auth/login").send(credentials);

      expect(response.status).toBe(401)
    });
  });
});
