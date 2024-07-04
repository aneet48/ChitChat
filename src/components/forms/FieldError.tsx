import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/constants/colors';

interface FieldErrorProp {
  error: string;
}
const FieldError = ({error}: FieldErrorProp) => {
  if (!error) {
    return null;
  }
  return (
    <View>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};

export default FieldError;

const styles = StyleSheet.create({
  text: {color: COLORS.error},
});
