import { SET_CHECKED, SET_PLEDGE, SHOW_ERROR_MESSAGE } from '../actions/pledge';

const initialState = {
  checked: '',
  amount: '',
  error: false,
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

    case SHOW_ERROR_MESSAGE:
      return {
        ...state,
        error: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
