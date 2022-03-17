/* eslint-disable default-param-last */
import { initialState, defaultUser } from '../../helper/initstate';
import actionNames from '../actions/actionTypes';

const hotel = (state = {}, action) => {
  switch (action.type) {
    case actionNames.SUCCESS_HOTELS:
      return {
        id: state.id,
        name: state.name,
        stars: state.stars,
        location: state.location,
        services: state.services,
      };
    default:
      return state;
  }
};

const hotelService = (state = {}, action) => {
  switch (action.type) {
    case actionNames.SUCCESS_HOTELS:
      return {
        id: state.id,
        name: state.name,
      };
    default:
      return state;
  }
};

export const hotels = (state = [], action) => {
  switch (action.type) {
    case actionNames.SUCCESS_HOTELS:
      return action.hotels.map((htel) => hotel(htel, action));
    default:
      return state;
  }
};

export const badservices = (state = [], action) => {
  switch (action.type) {
    case actionNames.SUCCESS_SERVICES:
      {
      const {services}=action;
      return services.map((serv) => hotelService(serv, action));
      }
    default:
      return state;
  }
};

export const popupModel = (state = initialState, action) => {
  switch (action.type) {
    case actionNames.POPUP: {
      const { popup } = action;
      const { initPop } = state;
      return { ...initPop, ...popup };
    }
    default:
      return state;
  }
};

export const userInfo = (state = defaultUser, action) => {
  switch (action.type) {
    case actionNames.SUCCESS_AUTH: {
      const { user } = action;
      return { ...state, ...user };
    }
    default:
      return state;
  }
};
export const ratedService = (state = [], action) => {
  switch (action.type) {
    case actionNames.RATE: {
      const { service } = action;
      return [...state, service];
    }
    case actionNames.CANSEL_VOTE: {
      const { canseled } = action;
      return [...state].filter(((servc) => canseled.id !== servc.id));
    }
    default:
      return state;
  }
};
