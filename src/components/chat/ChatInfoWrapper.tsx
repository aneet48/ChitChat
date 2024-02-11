import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {POPPINS} from '../../utils/constants/fonts';

const ChatInfoWrapper = () => {
  return (
    <View style={styles.infoWrapper}>
      <Text style={styles.time}>2 min ago</Text>
      <View style={styles.unreadCountWrapper}>
        <Text style={styles.unreadCount}>4</Text>
      </View>
    </View>
  );
};

export default ChatInfoWrapper;

const styles = StyleSheet.create({
  infoWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  time: {
    color: '#797C7B',
    fontFamily: POPPINS.Regular,
    fontSize: 12,
    opacity: 0.6,
  },
  unreadCountWrapper: {
    backgroundColor: '#F04A4C',
    height: 20,
    width: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadCount: {
    color: '#ffffff',
    fontFamily: POPPINS.Black,
    fontSize: 12,
  },
});
