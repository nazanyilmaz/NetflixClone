import {createSlice} from '@reduxjs/toolkit';

export const nottificationSlice = createSlice({
  name: 'nottification',
  initialState: {
    nottifications: [],
    count: 0,
  },
  reducers: {
    incrementNottification: state => {
      state.count += 1;
    },
    decrementNottification: state => {
      state.count -= 1;
    },
    setNottification: (state, action) => {
      console.log('GELEN VERİLER', action);
      state.nottifications = [...state.nottifications, action.payload];
    },
  },
});
export const {
  incrementNottification,
  decrementNottification,
  setNottification,
} = nottificationSlice.actions;
export default nottificationSlice.reducer;
