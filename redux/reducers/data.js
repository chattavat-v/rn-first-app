import { GET_DATA, ERROR_DATA } from '../actions/types';

const initialState = {
  data: [],
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case GET_DATA:
      return {
        ...state,
        data: payload
      };
    case ERROR_DATA:
      return {
        ...state,
        error: payload
      }
    default: 
      return state;
  };
};