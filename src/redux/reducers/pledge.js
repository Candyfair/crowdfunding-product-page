import { SET_PLEDGE } from '../actions/pledge';

const initialState = {
  amount: 'noreward',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PLEDGE:
      return {
        ...state,
        amount: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
