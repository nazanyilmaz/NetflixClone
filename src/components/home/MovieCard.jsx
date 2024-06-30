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
const MovieCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: item.id})}>
      <FastImage
        style={{
          width: width * 0.23,
          height: height * 0.18,
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
          fontSize: 13,
          fontWeight: '500',
          color: Colors.WHITEGRAY,
        }}>
        {item.title}
      </Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.25,
    marginVertical: 25,
  },
});

//make this component available to the app
export default MovieCard;
