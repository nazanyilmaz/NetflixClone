import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MOVIEDETAIL, MOVIELIST, NOTTIFICATION, TAB} from '../utils/routes';
import TabNavigation from './TabNavigation';
import MovieList from '../screens/movieList';
import Header from '../components/router/Header';
import MovieDetail from '../screens/movieList/MovieDetail';
import Nottification from '../screens/nottification';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
      }}>
      <Stack.Screen
        name={TAB}
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={MOVIELIST} component={MovieList} />
      <Stack.Screen name={MOVIEDETAIL} component={MovieDetail} />
      <Stack.Screen name={NOTTIFICATION} component={Nottification} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
