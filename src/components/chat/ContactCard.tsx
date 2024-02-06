import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {dispayPictureSize} from '../../utils/constants/dimentions';
import {POPPINS} from '../../utils/constants/fonts';

const ContactCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/user-dp.jpg')}
        style={styles.displayPicture}
      />
      <View style={styles.textWrapper}>
        <Text
          style={{
            color: 'black',
            fontFamily: POPPINS.Medium,
            fontSize: 20,
          }}>
          Alex Linderson
        </Text>
        <Text
          style={{
            color: '#797C7B',
            fontFamily: POPPINS.Regular,
            fontSize: 12,
            opacity: 0.6,
          }}>
          How are you today sds ds d s d sd
        </Text>
      </View>
      <View style={styles.infoWrapper}>
        <Text
          style={{
            color: '#797C7B',
            fontFamily: POPPINS.Regular,
            fontSize: 12,
            opacity: 0.6,
          }}>
          2 min ago
        </Text>
        <View
          style={{
            backgroundColor: '#F04A4C',
            height: 20,
            width: 20,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontFamily: POPPINS.Black,
              fontSize: 12,
            }}>
            4
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  displayPicture: {
    height: dispayPictureSize,
    width: dispayPictureSize,
    borderRadius: dispayPictureSize / 2,
  },
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 20,
  },
  textWrapper: {
    paddingHorizontal: 15,
    flex: 1,
    // backgroundColor: 'green',
  },
  infoWrapper: {
    // height: '100%',
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    justifyContent:'space-evenly'
  },
});
