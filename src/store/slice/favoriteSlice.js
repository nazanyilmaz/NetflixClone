import {createSlice} from '@reduxjs/toolkit';
import {addFavoriteMovie, fechFavoriteMovies} from '../actions/favoriteActions';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteMovies: null,
    pending: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addFavoriteMovie.pending, state => {})
      .addCase(addFavoriteMovie.fulfilled, (state, action) => {})
      .addCase(addFavoriteMovie.rejected, (state, action) => {
        state.error = action.payload.message;
      })
      .addCase(fechFavoriteMovies.pending, state => {
        state.pending = true;
      })
      .addCase(fechFavoriteMovies.fulfilled, (state, action) => {
        (state.favoriteMovies = action.payload.results),
          (state.pending = false);
      })
      .addCase(fechFavoriteMovies.rejected, (state, action) => {
        state.error = action.payload.message;
        state.pending = false;
      });
  },
});

export default favoriteSlice.reducer;
