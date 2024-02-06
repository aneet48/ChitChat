import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SsoLogins from '../../components/auth/SsoLogins';
import AuthOrSections from '../../components/auth/AuthOrSections';
import {POPPINS} from '../../utils/constants/fonts';
import {COLORS} from '../../utils/constants/colors';
import Button from '../../components/forms/Button';
import TextInput from '../../components/forms/TextInput';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={styles.heading}>Log in to Chatbox</Text>
        <Text style={styles.subHeading}>
          Welcome back! Sign in to using your social account or email to
          continue
        </Text>
        <SsoLogins theme="light" />
        <AuthOrSections theme="light" />
        <View style={styles.inputWrapper}>
          <TextInput title="Your email" keyboardType='email-address' />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput title="Password" secureTextEntry={true} />
        </View>
      </View>
      <View>
        <Button title="Log in" theme="light" />
        <Pressable>
          <Text style={[styles.buttonText, styles.loginTextWrapper]}>
            Forgot Password?
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-evenly',
  },
  formWrapper: {},
  heading: {
    textAlign: 'center',
    fontFamily: POPPINS.Bold,
    fontSize: 18,
    color: COLORS.primary,
  },
  subHeading: {
    textAlign: 'center',
    fontFamily: POPPINS.Light,
    fontSize: 14,
    color: COLORS.textLight,
    marginTop: 20,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  buttonText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: POPPINS.Medium,
    marginTop: 10,
  },
  loginTextWrapper: {fontFamily: POPPINS.Regular, fontSize: 14},
});
