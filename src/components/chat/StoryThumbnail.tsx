import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const StoryThumbnail = () => {
  return (
    <>
      <View
        style={{
          borderWidth: 2,
          borderColor: '#000000'.replace(/0/g, function () {
            return (~~(Math.random() * 16)).toString(16);
          }),
          borderRadius: 200 / 2,
        }}>
        <Image
          source={require('../../assets/images/user-dp.jpg')}
          style={{
            height: 70,
            width: 70,
            borderRadius: 200 / 2,
            borderColor: '#040509',
            borderWidth: 4,
          }}
        />
      </View>
      <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>
        Adil
      </Text>
    </>
  );
};

export default StoryThumbnail;

const styles = StyleSheet.create({});
