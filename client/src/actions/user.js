// login action creators
import { userTypes } from "./types";
import axios from "axios";
const { FETCH_USER } = userTypes;

export const fetchCurrentUser = () => async dispatch => {
  const res = await axios.get("/api/users/currentUser");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const logOutUser = () => async dispatch => {
  const res = await axios.get("/api/logout");

  dispatch({ type: FETCH_USER, payload: res.data });
}
