const initialState = {
  currentUser: null,
  userImage:
    // from http://www.clker.com
    "http://www.clker.com/cliparts/n/N/u/W/i/c/circle-teddy-bear-black-and-white-md.png"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
