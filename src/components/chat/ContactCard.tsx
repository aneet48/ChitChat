import {Image, StyleSheet, Text, View} from 'react-native';
import React, { ReactElement } from 'react';
import {dispayPictureSize} from '../../utils/constants/dimentions';
import {POPPINS} from '../../utils/constants/fonts';
import Feather from 'react-native-vector-icons/Feather';
import ChatInfoWrapper from './ChatInfoWrapper';
import ContactCallWrapper from './ContactCallWrapper';

interface IContactCard {
  name: string;
  status: string;
  rightContainer?: React.ReactNode
}
const ContactCard = (props: IContactCard) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/user-dp.jpg')}
        style={styles.displayPicture}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.contactName}>{props.name}</Text>
        <Text style={styles.contactStatus}>{props.status}</Text>
      </View>
      {props.rightContainer}
      {/* <ChatInfoWrapper />
      <ContactCallWrapper/> */}
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
  },
  textWrapper: {
    paddingHorizontal: 15,
    flex: 1,
    justifyContent: 'center',
  },
 
  contactName: {
    color: 'black',
    fontFamily: POPPINS.Medium,
    fontSize: 20,
    lineHeight: 25,
  },
  contactStatus: {
    color: '#797C7B',
    fontFamily: POPPINS.Regular,
    fontSize: 12,
    opacity: 0.6,
  },
});
