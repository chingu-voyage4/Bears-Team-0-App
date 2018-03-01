import { loginTypes } from "./types";
const { LOGIN, LOGOUT } = loginTypes;

export const login = () => ({ type: LOGIN });

export const logout = () => ({
  type: LOGOUT
});
