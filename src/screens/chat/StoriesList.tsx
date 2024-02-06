import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import StoryThumbnail from '../../components/chat/StoryThumbnail';

const StoriesList = () => {
  const arr = [...Array(10).keys()];
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        data={arr}
        renderItem={({item}) => (
          <TouchableOpacity style={{paddingHorizontal: 10}}>
            <StoryThumbnail />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default StoriesList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});
