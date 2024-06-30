//import liraries
import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import SectionHeaders from '../ui/SectionHeaders';
import {useSelector} from 'react-redux';
import MovieCard from './MovieCard';

// create a component
const Section = props => {
  const {item} = props;

  const {upcomingMovies, topRatedMovies, populerMovies, nowPlayingMovies} =
    useSelector(state => state.movies);

  const getData = () => {
    switch (item.value) {
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
    <View>
      <SectionHeaders title={item.title} value={item.value} />
      <FlatList
        horizontal
        data={getData()}
        renderItem={({item}) => <MovieCard item={item} />}
      />
    </View>
  );
};

//make this component available to the app
export default Section;
