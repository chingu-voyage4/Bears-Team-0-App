// login action creators
import { loginTypes } from "./types";
const { LOGIN, LOGOUT } = loginTypes;

// action to log into app
export const login = () => ({ type: LOGIN });

// action to log out of app
export const logout = () => ({
  type: LOGOUT
});
