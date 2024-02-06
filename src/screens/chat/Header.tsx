import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {dispayPictureSize} from '../../utils/constants/dimentions';
import {POPPINS} from '../../utils/constants/fonts';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#383d51',
          padding: 10,
          borderRadius: 50,
        }}>
        <Icon name="search" size={30} color="white" />
      </View>
      <Text
        style={{
          color: 'white',
          fontFamily: POPPINS.Medium,
          fontSize: 20,
        }}>
        Home
      </Text>
      <Image
        style={{
          height: 44,
          width: 44,
          borderRadius: 44 / 2,
        }}
        source={require('../../assets/images/user-dp.jpg')}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
