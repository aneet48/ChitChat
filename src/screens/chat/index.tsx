import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../utils/constants/colors';
import ChatList from './ChatList';
import Header from './Header';
import StoriesList from './StoriesList';

const Chat = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0.6, y: 1}}
      colors={[
        COLORS.gradiant.navy_blue.dark,
        COLORS.gradiant.navy_blue.lighter,
      ]}
      style={styles.headerWrapper}>
      <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
        <Header />
        <StoriesList/>
      </View>
      <View style={styles.chatList}>
        <ChatList />
      </View>
    </LinearGradient>
  );
};

export default Chat;

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: 'blue',
    flex: 1,
  },
  chatList: {
    backgroundColor: 'white',
    flex: 1,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    paddingVertical: 35,
    paddingHorizontal: 20,
  },
});
