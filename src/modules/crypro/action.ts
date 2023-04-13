import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {cryptocoinslist} from './coinsSlice';
// import {cryptocoinslist} from './coinsSlice';

// export const fetchcoins = (successCallback, failureCallback) => {
//   return async dispatch => {
//     try {
//       const response = await axios.get(
//         'https://api.coingecko.com/api/v3/coins/list?include_platform=true',
//       );
//       dispatch(cryptocoinslist(response));
//     } catch (error) {
//       throw new Error('an error occured ');
//     }
//   };
// };

export const fetchcoins = createAsyncThunk('fetchAllcoins', async () => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/list?include_platform=true',
    );

    return response;
  } catch (error) {
    throw new Error('an error occured ');
  }
});
