import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../../thema/colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  fechMovieDetail,
  removeDetailData,
} from '../../store/actions/movieActions';
import Spinner from '../../components/ui/spinner';
import FastImage from 'react-native-fast-image';
import {height, token, width} from '../../utils/constants';
import {IMAGE_BASE_URL} from '../../service/urls';
import Feather from 'react-native-vector-icons/Feather';
import {
  addFavoriteMovie,
  fechFavoriteMovies,
} from '../../store/actions/favoriteActions';
import {useNavigation} from '@react-navigation/native';
import {HOME} from '../../utils/routes';

const MovieDetail = ({route}) => {
  const navigation = useNavigation();
  const {movieId} = route?.params;
  const {movieDetailData, pendingDetail} = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fechMovieDetail(movieId));
    return () => {
      dispatch(removeDetailData());
      dispatch(fechFavoriteMovies());
    };
  }, []);

  return (
    <View style={styles.container}>
      {pendingDetail && !movieDetailData ? (
        <Spinner />
      ) : (
        <ScrollView>
          <FastImage
            style={{
              width: width,
              height: height * 0.3,
              borderRadius: 20,
            }}
            source={{
              uri: `${IMAGE_BASE_URL}${movieDetailData?.backdrop_path}`,
              headers: {
                ccept: 'application/json',
                Authorization: `Bearer ${token}`,
              },
              priority: FastImage.priority.high,
              cache: FastImage.cacheControl.immutable,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Pressable
            style={{position: 'absolute', right: 15, top: 25, zIndex: 100}}
            onPress={() => {
              dispatch(
                addFavoriteMovie({
                  media_id: movieDetailData.id,
                  media_type: 'movie',
                  favorite: true,
                }),
              ),
                navigation.navigate(HOME);
            }}>
            <Feather name="heart" size={35} color={Colors.RED} />
          </Pressable>

          <Text
            numberOfLines={2}
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 33,
              fontWeight: '500',
              color: Colors.WHITEGRAY,
              marginBottom: 15,
            }}>
            {movieDetailData?.title}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '400',
              color: Colors.GRAY,
              marginHorizontal: 5,
            }}>
            {movieDetailData?.overview}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 3,
              marginTop: 10,
            }}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: Colors.WHITE,
                fontSize: 15,
                fontWeight: '700',
              }}>
              Release Date:
            </Text>
            <Text
              style={{
                color: Colors.YELLOW,
                fontSize: 15,
                fontWeight: '500',
              }}>
              {movieDetailData?.release_date}
            </Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
});
