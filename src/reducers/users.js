import { RECEIVE_USERS } from "../actions/users";

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    default:
      return state;
  }
};

export default usersReducer;
