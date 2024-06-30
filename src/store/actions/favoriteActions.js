import {createAsyncThunk} from '@reduxjs/toolkit';
const {
  ACCOUNT_URL,
  ADD_FAVORITE_URL,
  BASE_URL,
  FAVORITE_URL,
} = require('../../service/urls');
const {postRequest, getRequest} = require('../../service/verb');
const {ACCOUNT_ID} = require('../../utils/constants');

const addFavoriteMovie = createAsyncThunk(
  'favorites/addFavoriteMovie',
  async values => {
    const url = `${BASE_URL}${ACCOUNT_URL}${ACCOUNT_ID}${ADD_FAVORITE_URL}`;
    const response = await postRequest(url, values);
    return response.data;
  },
);
const fechFavoriteMovies = createAsyncThunk(
  'favorites/fechFavoriteMovies',
  async () => {
    const url = `${BASE_URL}${ACCOUNT_URL}${ACCOUNT_ID}${FAVORITE_URL}`;
    const response = await getRequest(url);
    return response.data;
  },
);
export {addFavoriteMovie, fechFavoriteMovies};
