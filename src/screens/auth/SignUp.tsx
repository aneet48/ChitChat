import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {POPPINS} from '../../utils/constants/fonts';
import {COLORS} from '../../utils/constants/colors';
import Button from '../../components/forms/Button';
import TextInput from '../../components/forms/TextInput';
import {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import FirebaseService from '../../services/firebaseAuth';

const SignUp = () => {
  const handleSingUp =async () => {
   const result = await FirebaseService.signUp({
     email: '',
     password: '',
     name:''
   });
    // const usersRef = firebase.firestore().collection('users');
    // console.log('---usersRef', usersRef);
    
    // auth()
    //   .createUserWithEmailAndPassword('', '')
    //   .then(function (userCredential) {
    //     usersRef.doc(`${userCredential.user.uid}`).set({
    //       firstName: '',
    //       lastName: '',
    //       username: '',
    //       uid: 123445566,
    //     });
    //   });
  };
  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={styles.heading}>Sign up with Email</Text>
        <Text style={styles.subHeading}>
          Get chatting with friends and family today by signing up for our chat
          app!
        </Text>
        <View style={styles.inputsWrapper}>
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
        <Button title="Create an account" onPress={handleSingUp} />
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
    justifyContent: 'space-between',
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
  inputsWrapper: {marginTop: 30},
});
