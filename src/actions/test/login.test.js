import { login, logout } from "../login";

describe("login actions", () => {
  it("should create an action to login", () => {
    expect(login()).toEqual({
      type: "LOGIN"
    });
  });

  it("should create an action to logout", () => {
    expect(logout()).toEqual({
      type: "LOGOUT"
    });
  });
});
