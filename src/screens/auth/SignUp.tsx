import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {POPPINS} from '../../utils/constants/fonts';
import {COLORS} from '../../utils/constants/colors';
import Button from '../../components/forms/Button';
import TextInput from '../../components/forms/TextInput';
import FirebaseService from '../../services/firebaseAuth';
import useForm from '../../custom-hooks/useForm';
import FieldError from '../../components/forms/FieldError';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigationTypes';
type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUp = ({navigation}: Props) => {
  const [fields, errors, updateFields, handleBlur] = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formErr, setFormErr] = useState('');
  const handleSingUp = async () => {
    const result = await FirebaseService.signUp({
      email: fields.email,
      password: fields.password,
      name: fields.name,
    });
    if (result.success) {
      navigation.replace('Login');
    } else {
      setFormErr(result.err || 'There was some error');
    }
  };
  const isValidForm =
    !Object.keys(errors).length && Object.values(fields).every(v => v);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formWrapper}>
        <Text style={styles.heading}>Sign up with Email</Text>
        <Text style={styles.subHeading}>
          Get chatting with friends and family today by signing up for our chat
          app!
        </Text>
        <View style={styles.inputsWrapper}>
          <View style={styles.inputWrapper}>
            <TextInput
              title="Your name"
              value={fields.name}
              onChangeText={updateFields('name')}
              onBlur={handleBlur('required', 'name')}
            />
            {errors.name && <FieldError error={errors.name} />}
          </View>
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
              value={fields.password}
              secureTextEntry={true}
              onChangeText={updateFields('password')}
              onBlur={handleBlur('password', 'password')}
            />
            {errors.password && <FieldError error={errors.password} />}
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              title="Confirm Password"
              value={fields.confirmPassword}
              secureTextEntry={true}
              onChangeText={updateFields('confirmPassword')}
              onBlur={handleBlur('confirmPassword', 'confirmPassword')}
            />
            {errors.confirmPassword && (
              <FieldError error={errors.confirmPassword} />
            )}
          </View>
        </View>
      </View>
      <View>
        {formErr && <FieldError error={formErr} />}
        <Button
          disabled={!isValidForm}
          title="Create an account"
          onPress={handleSingUp}
        />
      </View>
    </ScrollView>
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
