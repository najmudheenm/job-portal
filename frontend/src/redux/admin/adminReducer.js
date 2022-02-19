const INITIAL_STATE = {
  Token: true,
};

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER_TOKEN":
      return { ...state, Token: action.payload };
    default:
        return state;
  }
};

export default adminReducer