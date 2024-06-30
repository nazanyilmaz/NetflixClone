import {configureStore} from '@reduxjs/toolkit';
import movieReducer from './slice/movieSlice';
import favoriteReducer from './slice/favoriteSlice';
import nottificationReducer from './slice/nottificationSlice';

export default store = configureStore({
  reducer: {
    movies: movieReducer,
    favorites: favoriteReducer,
    nottification: nottificationReducer,
  },
});
