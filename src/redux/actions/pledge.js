export const SET_PLEDGE = 'SET_PLEDGE';
export const SET_CHECKED = 'SET_CHECKED';
export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';

export const setPledge = (payload) => ({
  type: SET_PLEDGE,
  payload,
});

export const setChecked = (value) => ({
  type: SET_CHECKED,
  value,
});

export const showErrorMessage = (value) => ({
  type: SHOW_ERROR_MESSAGE,
  value,
});
