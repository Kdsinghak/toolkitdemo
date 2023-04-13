import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {coinsList} from '../../modals';
import {fetchcoins} from './action';

const status = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});
const initialState: coinsList = {
  coinlist: [],
  status: status.IDLE,
};

export const coinsdata = createSlice({
  name: 'coindata',
  initialState: initialState,
  reducers: {
    // cryptocoinslist: (state: coinsList, action: PayloadAction<any>) => {
    //   state.coinlist = action.payload.data;
    // },
  },
  extraReducers(builder) {
    builder.addCase(fetchcoins.pending, (state, action) => {
      state.status = status.LOADING;
    });
    builder.addCase(fetchcoins.fulfilled, (state, action) => {
      state.status = status.IDLE;
      console.log('actin here ', action);
    });
    builder.addCase(fetchcoins.rejected, (state, action) => {
      state.status = status.ERROR;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {cryptocoinslist} = coinsdata.actions;

export default coinsdata.reducer;
