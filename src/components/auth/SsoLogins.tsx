import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/constants/colors';

interface ISsoLogins {
  theme?: 'light' | 'dark';
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
  const isLightTheme = props.theme === 'light';

  return (
    <View style={styles.ssoLogoContainer}>
      <IconWrapper
        isLightTheme={isLightTheme}
        path={require('../../assets/images/facebook-logo.png')}
      />
      <IconWrapper
        isLightTheme={isLightTheme}
        path={require('../../assets/images/google-logo.png')}
      />
      <IconWrapper
        isLightTheme={isLightTheme}
        path={
          isLightTheme
            ? require('../../assets/images/apple-logo-dark.png')
            : require('../../assets/images/apple-logo.png')
        }
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
