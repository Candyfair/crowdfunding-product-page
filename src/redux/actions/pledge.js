export const SET_PLEDGE = 'SET_PLEDGE';
export const SET_CHECKED = 'SET_CHECKED';
// export const CHANGE_VALUE = 'CHANGE_VALUE';

export const setPledge = (payload) => ({
  type: SET_PLEDGE,
  payload,
});

export const setChecked = (value) => ({
  type: SET_CHECKED,
  value,
});
