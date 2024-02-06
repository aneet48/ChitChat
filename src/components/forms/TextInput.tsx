import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/constants/colors';
import {POPPINS} from '../../utils/constants/fonts';

interface ITextInputWrapper extends TextInputProps {
  title: string;
}

const TextInputWrapper = (props: ITextInputWrapper) => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default TextInputWrapper;

const styles = StyleSheet.create({
  title: {
    color: COLORS.primary,
    fontSize: 14,
    fontFamily: POPPINS.Medium,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: COLORS.lightgray3,
  },
});
