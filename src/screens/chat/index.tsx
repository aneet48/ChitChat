import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../utils/constants/colors';
import ContactList from './ContactList';
import Header from './Header';
import StoriesList from './StoriesList';
import {contactListContainerBorderRadius} from '../../utils/constants/dimentions';
import {MessageTabProps} from '../../types/navigationTypes';

interface IChat {
  props: MessageTabProps & {};
}
const Chat = (props: IChat) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0.6, y: 1}}
      colors={[
        COLORS.gradiant.navy_blue.dark,
        COLORS.gradiant.navy_blue.lighter,
      ]}
      style={styles.headerWrapper}>
      <View style={styles.storyContainer}>
        <Header />
        <StoriesList />
      </View>
      <View style={styles.chatList}>
        <ContactList />
      </View>
    </LinearGradient>
  );
};

export default Chat;

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 1,
  },
  chatList: {
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopEndRadius: contactListContainerBorderRadius,
    borderTopStartRadius: contactListContainerBorderRadius,
    // paddingVertical: 35,
    paddingHorizontal: 20,
  },
  storyContainer: {paddingVertical: 20, paddingHorizontal: 20},
});
