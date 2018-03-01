const initialState = {
  isLoggedIn: true,
  userImage:
    // from http://www.clker.com
    "http://www.clker.com/cliparts/n/N/u/W/i/c/circle-teddy-bear-black-and-white-md.png"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLoggedIn: true
      };
    case "LOGOUT":
      return {
        isLoggedIn: false
      };
    default:
      return state;
  }
};
