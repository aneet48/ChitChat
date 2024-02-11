import {StyleSheet, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {chatNavBarIcon} from '../../utils/constants/dimentions';
import {COLORS} from '../../utils/constants/colors';

const ContactCallWrapper = () => {
  return (
    <View style={styles.container}>
      <Feather
        name="phone"
        size={chatNavBarIcon}
        color={COLORS.black}
        style={styles.icon}
      />
      <Feather name="video" size={chatNavBarIcon} color={COLORS.black} />
    </View>
  );
};

export default ContactCallWrapper;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
});
