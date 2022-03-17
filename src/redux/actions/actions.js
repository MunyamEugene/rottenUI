import actionNames from './actionTypes';

export const success_fetch_hotels = ({ hotels }) => ({
  type: actionNames.SUCCESS_HOTELS,
  hotels,
});

export const success_fetch_services = ({ services }) => ({
  type: actionNames.SUCCESS_SERVICES,
  services,
});
export const success_vote = (vote) => ({
  type: actionNames.SUCCESS_VOTE,
  newVote: vote,
});
export const success_auth = (authData) => ({
  type: actionNames.SUCCESS_AUTH,
  user: authData,
});

// ###########################
// SAGA ACTIONS
// ###########################

export const fetch_hotels = (url) => ({
  type: actionNames.FETCH_HOTELS,
  url,
});

export const fetch_services = (url) => ({
  type: actionNames.FETCH_SERVICES,
  url,
});

export const fail = (errors) => ({
  type: actionNames.FAIL,
  errors,
});

export const create_vote = (url, vote) => ({
  type: actionNames.VOTE,
  url,
  vote,
});

export const authenticate = (url) => ({
  type: actionNames.AUTH,
  url,
});

export const logoutUser = (url) => ({
  type: actionNames.LOGOUT,
  url,
});
//= =====================
// rating actions
//= =====================
export const popup = (value) => ({
  type: actionNames.POPUP,
  popup: { popup: value },
});

export const ratedService = (service) => ({
  type: actionNames.RATE,
  service,
});

export const canselVote = (canseled) => ({
  type: actionNames.CANSEL_VOTE,
  canseled,
});
