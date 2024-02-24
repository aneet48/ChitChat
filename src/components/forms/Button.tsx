import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/constants/colors';
import {POPPINS} from '../../utils/constants/fonts';
import LinearGradient from 'react-native-linear-gradient';

interface IButton {
  title: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const Button = ({title, onPress}: IButton) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[
          COLORS.gradiant.navy_blue.dark,
          COLORS.gradiant.navy_blue.lighter,
        ]}
        style={styles.gradient}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  button: {
    height: 48,
    borderRadius: 16,
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: POPPINS.Bold,
  },
});
