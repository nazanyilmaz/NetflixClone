//import liraries
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Colors} from '../../thema/colors';

// create a component
const NottificationCard = ({item}) => {
  const sentTime = 1719749512284; // Zaman damgası
  const date = new Date(sentTime);

  // Okunabilir tarih formatına dönüştürme
  const readableDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour12: false,
  });

  //console.log(readableDate);
  return (
    <View style={{flexDirection: 'row', padding: 15, margin: 15, gap: 25}}>
      <View style={{flex: 1}}>
        <Image
          source={{uri: item?.notification?.android?.imageUrl}}
          style={{width: 70, height: 70, borderRadius: 10}}
        />
      </View>
      <View style={{flex: 4}}>
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 3,
          }}>
          {item?.notification?.title}
        </Text>

        <Text style={{color: Colors.WHITEGRAY}}>
          {item?.notification?.body}
        </Text>
        <Text style={{color: Colors.WHITEGRAY}}>Date: {readableDate}</Text>
      </View>
    </View>
  );
};

//make this component available to the app
export default NottificationCard;
