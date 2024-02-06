import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/constants/colors';
import {POPPINS} from '../../utils/constants/fonts';

interface IAuthOrSections {
  theme?: 'light' | 'dark';
}

const AuthOrSections = (props: IAuthOrSections) => {
  const isLightTheme = props.theme === 'light';
  return (
    <View style={styles.barWrapper}>
      <View style={[styles.bar, isLightTheme ? styles.barLight : {}]} />
      <Text style={[styles.barText, isLightTheme ? styles.barTextLight : {}]}>
        OR
      </Text>
      <View style={[styles.bar, isLightTheme ? styles.barLight : {}]} />
    </View>
  );
};

export default AuthOrSections;

const styles = StyleSheet.create({
  bar: {
    opacity: 0.5,
    height: 1,
    flex: 0.5,
    backgroundColor: COLORS.white,
  },
  barLight: {
    backgroundColor: COLORS.lightgray3,
  },
  barWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  barText: {
    color: COLORS.white,
    flex: 0.2,
    fontSize: 14,
    fontFamily: POPPINS.Black,
    textAlign: 'center',
  },
  barTextLight: {
    color: COLORS.textLight,
  },
});
