//import liraries
import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../../thema/colors';
import MovieListCard from '../../components/movieList/MovieListCard';

// create a component
const MovieList = props => {
  const {value} = props.route.params;

  const {upcomingMovies, topRatedMovies, populerMovies, nowPlayingMovies} =
    useSelector(state => state.movies);

  const getData = () => {
    switch (value) {
      case 'upcoming':
        return upcomingMovies;
      case 'popular':
        return populerMovies;
      case 'top_rated':
        return topRatedMovies;
      case 'now_playing':
        return nowPlayingMovies;
      default:
        return populerMovies;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={getData()}
        renderItem={({item}) => <MovieListCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
});

export default MovieList;
