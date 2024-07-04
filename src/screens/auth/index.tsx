import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {POPPINS} from '../../utils/constants/fonts';
import {COLORS} from '../../utils/constants/colors';
import SsoLogins from '../../components/auth/SsoLogins';
import AuthOrSections from '../../components/auth/AuthOrSections';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { GRADIANT_BG_IMAGE } from '../../utils/constants/images';
import { RootStackParamList } from '../../types/navigationTypes';

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

const Auth = ({navigation}: Props) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ImageBackground style={styles.container} source={GRADIANT_BG_IMAGE}>
      <View>
        <Text style={styles.header}>Connect friends easily & quickly</Text>
        <Text style={styles.subheader}>
          Our chat app is the perfect way to stay connected with friends and
          family.
        </Text>
        <SsoLogins />
        <AuthOrSections />

        <Pressable
          android_ripple={{color: Colors.darkGray, borderless: false}}
          style={styles.signInBtn}
          onPress={goToSignUp}>
          <Text style={styles.buttonText}>Sign up with email</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={goToLogin}>
          <View style={styles.loginWrapper}>
            <Text style={[styles.buttonText, styles.loginTextWrapper]}>
              Existing account?
            </Text>
            <Text style={[styles.buttonText, styles.logInText]}>Log In</Text>
          </View>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'space-evenly',
  },
  header: {
    color: COLORS.white,
    fontSize: 68,
    fontFamily: POPPINS.Regular,
    lineHeight: 78,
  },
  subheader: {
    color: COLORS.white,
    opacity: 0.5,
    fontSize: 16,
    fontFamily: POPPINS.Regular,
    lineHeight: 26,
    marginTop: 25,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: POPPINS.Medium,
  },
  loginTextWrapper: {fontFamily: POPPINS.Regular, fontSize: 14},
  logInText: {fontFamily: POPPINS.Black, marginLeft: 10},
  signInBtn: {
    backgroundColor: COLORS.lightgray2,
    borderRadius: 16,
    padding: 13,
  },
  loginWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
