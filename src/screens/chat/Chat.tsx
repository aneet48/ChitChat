import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/chat/Header';
import ChatBottomAction from '../../components/chat/ChatBottomAction';
import { COLORS } from '../../utils/constants/colors';
import ChatBlock from '../../components/chat/ChatBlock';

const Chat = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ChatBlock />
      <ChatBottomAction></ChatBottomAction>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {backgroundColor: COLORS.white, flex: 1},
});
