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
import ChatInfoWrapper from '../../components/chat/ChatInfoWrapper';

const ContactList = () => {
  const arr = [...Array(10).keys()];
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={arr}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.cardContainer}>
            <ContactCard
              name="Alex Linderson"
              status=" How are you today sds ds d s d sd"
              rightContainer={<ChatInfoWrapper />}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {height: '100%'},
  cardContainer: {width: '100%', padding: 5, marginVertical: 10},
});
