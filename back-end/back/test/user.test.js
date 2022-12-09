const request = require("supertest");
let token = "";

describe("Create user, Login user, Delete user", () => {
  test("Create a new user to db", async () => {
    const response = await request("http://localhost:3001")
      .post("/users/create")
      .send({
        username: "test",
        password: "test",
      })
      .set("Accept", "application/json");
  
    expect(response.body.message).toBe("User created");
  });
  
  test("Login with new user", async () => {
    const response = await request("http://localhost:3001")
      .post("/users/login")
      .auth("test", "test");
  
    expect(response.headers["set-cookie"][0]).toContain("token");
    token = response.headers["set-cookie"][0].split("=")[1].split(";")[0];
  });
  
  test("Delete new user", async () => {
    const response = await request("http://localhost:3001")
      .delete("/users/delete")
      .set("Cookie", `token=${token}`);
  
    expect(response.body.message).toBe("User deleted");
  });
});

