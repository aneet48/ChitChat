import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import ContactCard from '../../components/chat/ContactCard';

const ChatList = () => {
  const arr = [...Array(10).keys()];
  return (
    <View style={styles.container}>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={arr}
        renderItem={({item}) => (
          <TouchableOpacity style={{width: '100%', padding: 5}}>
            <ContactCard />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {height: '100%'},
});
