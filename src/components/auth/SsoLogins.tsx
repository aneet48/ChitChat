import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/constants/colors';
import {LOGO} from '../../utils/constants/images';
import {THEME} from '../../utils/constants';
import { Ttheme } from '../../types';

interface ISsoLogins {
  theme?: Ttheme;
}

interface IIconWrapper {
  isLightTheme: Boolean;
  path: ImageSourcePropType;
}

const IconWrapper = ({isLightTheme, path}: IIconWrapper) => (
  <View
    style={[
      styles.logoContainer,
      isLightTheme ? {} : styles.logoContainerBackground,
    ]}>
    <Image source={path} />
  </View>
);

const SsoLogins = (props: ISsoLogins) => {
  const isLightTheme = props.theme === THEME.light;

  return (
    <View style={styles.ssoLogoContainer}>
      <IconWrapper isLightTheme={isLightTheme} path={LOGO.FACEBOOK_LOGO} />
      <IconWrapper isLightTheme={isLightTheme} path={LOGO.GOOGLE_LOGO} />
      <IconWrapper
        isLightTheme={isLightTheme}
        path={isLightTheme ? LOGO.APPLE_LOGO.DARK : LOGO.APPLE_LOGO.LIGHT}
      />
    </View>
  );
};

export default SsoLogins;

const styles = StyleSheet.create({
  ssoLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  logoContainer: {
    borderRadius: 48,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  logoContainerBackground: {
    backgroundColor: COLORS.lightgray,
  },
});
