import React from 'react';
import {FAVORITE, HOME} from '../../utils/routes';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const TabIcon = ({size, color, iconName, focused}) => {
  if (iconName == HOME)
    return <Fontisto name="home" size={size} color={color} />;
  else if (iconName == FAVORITE)
    return <Feather name="heart" size={size} color={color} />;
};

export default TabIcon;
