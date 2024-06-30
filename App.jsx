import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/router/RootNavigation';
import {Provider} from 'react-redux';
import store from './src/store';
import {StatusBar, Text} from 'react-native';
import {Colors} from './src/thema/colors';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={Colors.BLACK} />
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
