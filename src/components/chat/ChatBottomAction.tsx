import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../utils/constants/colors';
import {chatNavBarIcon} from '../../utils/constants/dimentions';

const ChatBottomAction = () => {
  return (
    <View style={[styles.flexRow, styles.container]}>
      <Feather
        color={COLORS.lightgray2}
        name="paperclip"
        size={chatNavBarIcon}
      />
      <View style={[styles.flexRow, styles.input]}>
        <TextInput
          placeholderTextColor={COLORS.lightgray3}
          placeholder="Write your message"
        />
        <Feather color={COLORS.lightgray3} name="file" size={chatNavBarIcon} />
      </View>
      <View style={styles.flexRow}>
        <Feather
          color={COLORS.lightgray2}
          name="camera"
          size={chatNavBarIcon}
          style={styles.icon}
        />
        <Feather
          color={COLORS.lightgray2}
          name="mic"
          size={chatNavBarIcon}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default ChatBottomAction;

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: COLORS.chat.msgInputBackgroundColor,
    flex: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  icon: {
    marginRight: 15,
  },
});
