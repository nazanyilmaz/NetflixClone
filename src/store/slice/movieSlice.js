import {createSlice} from '@reduxjs/toolkit';
import {
  fechUpcomingMovies,
  fechNowPlayingMovies,
  fechPopulerMovies,
  fechTopRatedMovies,
  fechMovieDetail,
  removeDetailData,
} from '../actions/movieActions';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movieDetailData: null,
    pendingDetail: false,
    upcomingMovies: [],
    topRatedMovies: [],
    populerMovies: [],
    nowPlayingMovies: [],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fechUpcomingMovies.pending, state => {
        state.pending = true;
      })
      .addCase(fechUpcomingMovies.fulfilled, (state, action) => {
        (state.pending = false),
          (state.upcomingMovies = action.payload.results);
      })
      .addCase(fechUpcomingMovies.rejected, (state, action) => {
        (state.pending = false), (state.error = action.payload.message);
      })

      .addCase(fechTopRatedMovies.pending, state => {
        state.pending = true;
      })
      .addCase(fechTopRatedMovies.fulfilled, (state, action) => {
        (state.pending = false),
          (state.topRatedMovies = action.payload.results);
      })
      .addCase(fechTopRatedMovies.rejected, (state, action) => {
        (state.pending = false), (state.error = action.payload.message);
      })

      .addCase(fechPopulerMovies.pending, state => {
        state.pending = true;
      })
      .addCase(fechPopulerMovies.fulfilled, (state, action) => {
        (state.pending = false), (state.populerMovies = action.payload.results);
      })
      .addCase(fechPopulerMovies.rejected, (state, action) => {
        (state.pending = false), (state.error = action.payload.message);
      })

      .addCase(fechNowPlayingMovies.pending, state => {
        state.pending = true;
      })
      .addCase(fechNowPlayingMovies.fulfilled, (state, action) => {
        (state.pending = false),
          (state.nowPlayingMovies = action.payload.results);
      })
      .addCase(fechNowPlayingMovies.rejected, (state, action) => {
        (state.pending = false), (state.error = action.payload.message);
      })
      .addCase(fechMovieDetail.pending, state => {
        state.pendingDetail = true;
      })
      .addCase(fechMovieDetail.fulfilled, (state, action) => {
        (state.pendingDetail = false), (state.movieDetailData = action.payload);
      })
      .addCase(fechMovieDetail.rejected, (state, action) => {
        (state.pendingDetail = false), (state.error = action.payload.message);
      })
      .addCase(removeDetailData.fulfilled, (state, action) => {
        state.movieDetailData = action.payload;
      });
  },
});

export default movieSlice.reducer;
