import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SsoLogins from '../../components/auth/SsoLogins';
import AuthOrSections from '../../components/auth/AuthOrSections';
import {POPPINS} from '../../utils/constants/fonts';
import {COLORS} from '../../utils/constants/colors';
import Button from '../../components/forms/Button';
import TextInput from '../../components/forms/TextInput';
import {THEME} from '../../utils/constants';
import firebaseAuth from '../../services/firebaseAuth';
import {setToken} from '../../store/slices/authSlice';
import {useAppDispatch} from '../../store/hooks';
import useForm from '../../custom-hooks/useForm';
import FieldError from '../../components/forms/FieldError';
const Login = () => {
  const [fields, errors, updateFields, handleBlur] = useForm({
    email: '',
    password: '',
  });
  const [formErr, setFormErr] = useState('');

  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    let resp = await firebaseAuth.login({
      email: fields.email,
      password: fields.password,
    });
    if (resp.success && resp?.userCredential?.user.uid) {
      dispatch(setToken({uid: resp.userCredential.user.uid}));
    } else {
      setFormErr(resp.err || 'There was some error');
    }
  };

  const isValidForm =
    !Object.keys(errors).length && Object.values(fields).every(v => v);

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={styles.heading}>Log in to Chatbox</Text>
        <Text style={styles.subHeading}>
          Welcome back! Sign in to using your social account or email to
          continue
        </Text>
        <SsoLogins theme={THEME.light} />
        <AuthOrSections theme={THEME.light} />
        <View style={styles.inputWrapper}>
          <TextInput
            title="Your email"
            value={fields.email}
            keyboardType="email-address"
            onChangeText={updateFields('email')}
            onBlur={handleBlur('email', 'email')}
          />
          {errors.email && <FieldError error={errors.email} />}
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            title="Password"
            secureTextEntry={true}
            value={fields.password}
            onChangeText={updateFields('password')}
            onBlur={handleBlur('password', 'password')}
          />
          {errors.password && <FieldError error={errors.password} />}
        </View>
      </View>
      <View>
        {formErr && <FieldError error={formErr} />}
        <Button disabled={!isValidForm} title="Login" onPress={handleLogin} />
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
});
