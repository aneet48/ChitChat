import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../../store/hooks';
import {revokeToken} from '../../store/slices/authSlice';

const Settings = () => {
  const dispatch = useAppDispatch();
  return (
    <View>
      <Button
        title="logout"
        onPress={() => {
          dispatch(revokeToken());
        }}></Button>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
