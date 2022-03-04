const INITIAL_STATE = {
  email:""
};

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_ADMIN":
      return { ...state,...action.payload };
    case "LOGOUT":
      return {email:""}
    default:
        return state;
  }
};

export default adminReducer