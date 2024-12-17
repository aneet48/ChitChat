import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface StoryThumbnailProps {
  isAddThumbnail?: boolean;
}

const StoryThumbnail = ({isAddThumbnail}: StoryThumbnailProps) => {
  return (
    <>
      <View
        style={{
          borderWidth: 2,
          height: 75,
          width: 75,
          borderColor: '#000000'.replace(/0/g, function () {
            return (~~(Math.random() * 16)).toString(16);
          }),
          borderRadius: 200 / 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {isAddThumbnail ? (
          <Ionicons name="add" color={'white'} size={45} />
        ) : (
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
        )}
      </View>
      <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>
        {isAddThumbnail ? 'My Status' : 'Adil'}
      </Text>
    </>
  );
};

export default StoryThumbnail;

const styles = StyleSheet.create({});
