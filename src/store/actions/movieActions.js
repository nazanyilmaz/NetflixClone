import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verb';
import {
  BASE_URL,
  NOW_PLAYING_URL,
  POPULER_URL,
  TOP_RATED_URL,
  UPCOMING_URL,
} from '../../service/urls';

const fechUpcomingMovies = createAsyncThunk(
  'movies/fechUpcomingMovies',
  async () => {
    const response = await getRequest(UPCOMING_URL);
    return response.data;
  },
);
const fechPopulerMovies = createAsyncThunk(
  'movies/fechPopulerMovies',
  async () => {
    const response = await getRequest(POPULER_URL);
    return response.data;
  },
);
const fechTopRatedMovies = createAsyncThunk(
  'movies/fechTopRatedMovies',
  async () => {
    const response = await getRequest(TOP_RATED_URL);
    return response.data;
  },
);
const fechNowPlayingMovies = createAsyncThunk(
  'movies/fechNowPlayingMovies',
  async () => {
    const response = await getRequest(NOW_PLAYING_URL);
    return response.data;
  },
);
const fechMovieDetail = createAsyncThunk(
  'movies/fechMovieDetail',
  async movie_id => {
    const response = await getRequest(BASE_URL + 'movie/' + movie_id);
    return response.data;
  },
);
const removeDetailData = createAsyncThunk(
  'movies/removeDetailData',
  async () => {
    return null;
  },
);

export {
  fechUpcomingMovies,
  fechPopulerMovies,
  fechTopRatedMovies,
  fechNowPlayingMovies,
  fechMovieDetail,
  removeDetailData,
};
