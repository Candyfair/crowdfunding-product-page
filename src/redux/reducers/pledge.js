import { SET_CHECKED, SET_PLEDGE } from '../actions/pledge';

const initialState = {
  checked: '',
  amount: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PLEDGE:
      return {
        ...state,
        amount: action.payload,
      };

    case SET_CHECKED:
      return {
        ...state,
        checked: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
