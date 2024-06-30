//import liraries
import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IMAGE_BASE_URL} from '../../service/urls';
import {height, token, width} from '../../utils/constants';
import {MOVIEDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../thema/colors';
// create a component
const MovieListCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: item.id})}>
      <FastImage
        style={{
          width: width * 0.45,
          height: height * 0.35,
          borderRadius: 20,
        }}
        source={{
          uri: `${IMAGE_BASE_URL}${item.poster_path}`,
          headers: {
            ccept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
          priority: FastImage.priority.high,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text
        numberOfLines={1}
        style={{
          color: 'white',
          fontSize: 23,
          fontWeight: '500',
          color: Colors.WHITEGRAY,
        }}>
        {item.title}
      </Text>
      <Text
        numberOfLines={3}
        style={{
          color: 'white',
          fontSize: 13,
          fontWeight: '400',
          color: Colors.GRAY,
        }}>
        {item.overview}
      </Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.45,
    marginVertical: 10,
    marginHorizontal: 8,
  },
});

//make this component available to the app
export default MovieListCard;
