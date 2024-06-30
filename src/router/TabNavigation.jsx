import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Favorite from '../screens/favorite';
import {FAVORITE, HOME} from '../utils/routes';
import {Colors} from '../thema/colors';
import TabIcon from '../components/router/TabIcon';
import Header from '../components/router/Header';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size, iconName}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            iconName={route?.name}
            route={route}
          />
        ),
        tabBarStyle: {
          backgroundColor: Colors.BLACK,
        },
        tabBarActiveTintColor: Colors.WHITE,
        tabBarInactiveTintColor: Colors.GRAY,
        header: () => <Header />,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={FAVORITE} component={Favorite} />
    </Tab.Navigator>
  );
}
