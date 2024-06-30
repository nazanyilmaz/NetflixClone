//import liraries
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, StyleSheet, Image, Pressable, Text} from 'react-native';
import {Colors} from '../../thema/colors';
import {width} from '../../utils/constants';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {NOTTIFICATION} from '../../utils/routes';

// create a component
const Header = props => {
  const name = props?.route?.name;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {count} = useSelector(state => state.nottification);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: insets.left + 10,
        backgroundColor: Colors.BLACK,
        flexDirection: 'row',
      }}>
      <View style={{flex: 1}}>
        {name ? (
          <Pressable onPress={() => navigation.goBack()}>
            <Icon size={30} color={Colors.WHITE} name="arrow-left" />
          </Pressable>
        ) : (
          <Icon size={30} color={Colors.WHITE} name="menu" />
        )}
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: width * 0.4,
            height: width * 0.1,
            resizeMode: 'contain',
          }}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row'}}>
        <Pressable style={{marginRight: 10}}>
          <Icon name="search" size={30} color={Colors.WHITE} />
        </Pressable>
        {!name && (
          <Pressable onPress={() => navigation.navigate(NOTTIFICATION)}>
            <Icon size={30} color={Colors.WHITE} name="bell" />
            {count > 0 && (
              <View
                style={{
                  backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 1,
                  borderRadius: 100,
                  width: 20,
                  height: 20,
                  position: 'absolute',
                  top: -5,
                  right: -5,
                }}>
                <Text style={{color: Colors.WHITE}}>{count}</Text>
              </View>
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
  },
});

//make this component available to the app
export default Header;
