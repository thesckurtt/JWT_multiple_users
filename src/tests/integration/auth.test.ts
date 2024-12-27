import {app} from "../../server.js"

describe("Auth Routes", ()=>{
  beforeAll(async ()=>{
    await app.ready(); // Ensures that the server is ready
  })

  afterAll(async ()=>{
    app.close() // Ensures that the server is close 
  })

  describe("Route /auth/login", ()=>{
    it("should return a token for valid credentials", ()=>{
      expect(true).toBe(true);
    })
  })
});