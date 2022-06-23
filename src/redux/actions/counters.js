export const ADD_NEW_PLEDGE = 'ADD_NEW_PLEDGE';
export const ADD_BACKER = 'ADD_BACKER';

export const addNewPledge = (payload) => ({
  type: ADD_NEW_PLEDGE,
  payload,
});

export const addBacker = (payload) => ({
  type: ADD_BACKER,
  payload,
});
