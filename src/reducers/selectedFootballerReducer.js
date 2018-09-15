export default (state = {}, action) => {
  switch (action.type) {
    case "FOOTBALLER_SELECTED":
      return action.payload;
    default:
      return state;
  }
};
