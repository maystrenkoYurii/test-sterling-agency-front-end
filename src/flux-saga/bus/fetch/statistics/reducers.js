import { types } from './types';

export const initialState = {
  buyers: 5000000,
  suppliers: 1640,
  products: 21416,
  countOnline: 0,
};

export const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FETCH_STATISTICS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
