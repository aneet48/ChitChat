import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SsoLogins from '../../components/auth/SsoLogins';
import AuthOrSections from '../../components/auth/AuthOrSections';
import {POPPINS} from '../../utils/constants/fonts';
import {COLORS} from '../../utils/constants/colors';
import Button from '../../components/forms/Button';
import TextInput from '../../components/forms/TextInput';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={styles.heading}>Sign up with Email</Text>
        <Text style={styles.subHeading}>
          Get chatting with friends and family today by signing up for our chat
          app!
        </Text>
        <View style={{marginTop: 30}}>
          <View style={styles.inputWrapper}>
            <TextInput title="Your name" />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput title="Your email" keyboardType="email-address" />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput title="Password" secureTextEntry={true} />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput title="Confirm Password" secureTextEntry={true} />
          </View>
        </View>
      </View>
      <View>
        <Button title="Create an account" theme="light" />
      </View>
    </View>
  );
};

export default SignUp;

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
