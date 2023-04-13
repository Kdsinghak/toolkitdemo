import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Todo, TodosState} from '../../modals';

const initialState: TodosState = {
  list: [],
};

export const userData = createSlice({
  name: 'userData',
  initialState: initialState,
  reducers: {
    AddUser: (state: TodosState, action: PayloadAction<Todo>) => {
      state.list.push(action.payload);
    },
    deleteUser: (state: TodosState, action: PayloadAction<number>) => {
      state.list.splice(action.payload, 1);
    },
    updateUser: (state: TodosState, action: PayloadAction<any>) => {
      state.list = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {AddUser, deleteUser, updateUser} = userData.actions;

export default userData.reducer;
