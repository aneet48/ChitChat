import {Image, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {profileImageAsIcon} from '../../utils/constants/dimentions';
import {POPPINS} from '../../utils/constants/fonts';
import {COLORS} from '../../utils/constants/colors';
import { DUMMY_PROFILE_IMAGE } from '../../utils/constants/images';
import { useAppDispatch } from '../../store/hooks';
import { revokeToken } from '../../store/slices/authSlice';

const Header = () => {
  const dispatch  = useAppDispatch()
  const logout = () =>{
    console.log('--clicked');
    
    dispatch(revokeToken())
  }
  return (
    <View style={styles.container}>
      <View style={styles.searchIconContainer}>
        <Icon name="search" size={30} color={COLORS.white} />
      </View>
      <Text style={styles.headerText}>Home</Text>
      <TouchableOpacity onPress={logout}>
        <Image style={styles.profileImage} source={DUMMY_PROFILE_IMAGE} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchIconContainer: {
    backgroundColor: COLORS.lightgray,
    opacity:0.8,
    padding: 10,
    borderRadius: 50,
  },
  headerText: {
    color: COLORS.white,
    fontFamily: POPPINS.Medium,
    fontSize: 20,
  },
  profileImage: {
    height: profileImageAsIcon,
    width: profileImageAsIcon,
    borderRadius: profileImageAsIcon / 2,
  },
});
