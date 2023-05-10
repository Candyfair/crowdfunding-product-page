import { ADD_BACKER, ADD_NEW_PLEDGE } from "../actions/counters";

const initialState = {
  backed: 89914,
  backers: 5007,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NEW_PLEDGE:
      return {
        ...state,
        backed: state.backed + action.payload,
      };

    case ADD_BACKER:
      return {
        ...state,
        backers: state.backers + 1,
      };

    default:
      return state;
  }
};

export default reducer;
