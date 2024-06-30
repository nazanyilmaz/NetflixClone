import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../thema/colors';
import {useNavigation} from '@react-navigation/native';
import {MOVIELIST} from '../../utils/routes';
import {height} from '../../utils/constants';

const SectionHeaders = props => {
  const navigation = useNavigation();
  const {title, value} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={() => navigation.navigate(MOVIELIST, {value: value})}>
        <Text style={styles.seeAll}>See All</Text>
      </Pressable>
    </View>
  );
};

export default SectionHeaders;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 5,
  },
  seeAll: {
    color: Colors.YELLOW,
    fontSize: 18,
    fontWeight: '600',
  },
});
