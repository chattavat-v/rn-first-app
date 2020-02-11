import axios from 'axios';
import { GET_DATA, ERROR_DATA } from './types';

export const getData = () => async dispatch => {
  try {
    let response = await axios.get(`http:localhost:9125/data`);
    
    dispatch({
      type: GET_DATA,
      payload: response.data
    })
  } catch (err) {
    dispatch({
      type: ERROR_DATA,
      payload: err
    });
  };
};