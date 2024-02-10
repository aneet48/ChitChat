import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import ContactCard from './ContactCard';
import {COLORS} from '../../utils/constants/colors';
import {chatNavBarIcon} from '../../utils/constants/dimentions';

const Header = () => {
  return (
    <View style={styles.container}>
      <Feather
        color={COLORS.black}
        name="arrow-left"
        size={chatNavBarIcon}
        style={styles.icon}
      />
      <View style={styles.contactCard}>
        <ContactCard name="Alex Linderson" status="Active now" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  icon: {marginRight: 15},
  contactCard: {flex: 1},
});
