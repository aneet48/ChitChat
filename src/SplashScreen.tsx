import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BLUR_ELLIPSE, GRADIANT_BG_IMAGE} from './utils/constants/images';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from './utils/constants/colors';
import {POPPINS} from './utils/constants/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SplashScreen = () => {
  return (
    <ImageBackground style={styles.container} source={GRADIANT_BG_IMAGE}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons
            name="chatbubble-ellipses-sharp"
            size={40}
            color={COLORS.white}
          />
          <Ionicons
            name="chatbubble-ellipses-sharp"
            size={40}
            color={COLORS.white}
            style={{
              transform: [{rotateY: '180deg'}],
              marginTop: 10,
              marginLeft: -20,
            }}
          />
        </View>

        <Text
          style={{
            color: COLORS.white,
            fontSize: 60,
            textAlign: 'center',
            fontFamily: POPPINS.SemiBold,
          }}>
          ChitChat
        </Text>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'space-evenly',
  },
});
