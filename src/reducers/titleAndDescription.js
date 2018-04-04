const initialState = {
  title: "",
  description: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return {
        ...state,
        title: action.payload
      };
    case "CHANGE_DESCRIPTION":
      return {
        ...state,
        description: action.payload
      };
    default:
      return state;
  }
};
