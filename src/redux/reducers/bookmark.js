import { SET_BOOKMARK } from '../actions/bookmark';

const initialState = {
  bookmark: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_BOOKMARK:
      return {
        ...state,
        bookmark: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
