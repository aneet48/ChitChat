import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/constants/colors';
import {POPPINS} from '../../utils/constants/fonts';
import {chatBubbleProfileImage} from '../../utils/constants/dimentions';

interface ChatBubbleProps {
  isLeft?: Boolean;
  text: string;
}

const ChatBubble = ({isLeft, text}: ChatBubbleProps) => (
  <View
    style={[
      styles.chatBubbleContainer,
      {
        alignSelf: isLeft ? 'flex-end' : 'flex-start',
      },
    ]}>
    <View style={styles.chatBubble}>
      {!isLeft && (
        <Image
          source={require('../../assets/images/user-dp.jpg')}
          style={styles.profileImage}
        />
      )}
      <Text
        style={[
          styles.chatBubbleText,
          {
            backgroundColor: isLeft
              ? COLORS.primary
              : COLORS.chat.chatBackgroundColor,
            borderTopLeftRadius: isLeft ? COLORS.chat.chatBubbleRadius : 0,
            borderTopRightRadius: isLeft ? 0 : COLORS.chat.chatBubbleRadius,
            color: isLeft ? COLORS.white : COLORS.textDark,
          },
        ]}>
        {text}
      </Text>
    </View>
    <Text style={styles.chatBubbleTime}>9:26</Text>
  </View>
);

const ChatBlock = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.chatContainer}>
        <ChatBubble isLeft text="Hello there!" />
        <ChatBubble text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate maxime officia dolorum nemo porro sunt, exercitationem eius voluptatem quidem dolore repellat deleniti commodi rerum accusantium quisquam nostrum. Porro, provident corporis." />
        <ChatBubble isLeft text="I'm feeling great, thanks!" />
        <ChatBubble
          isLeft
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate maxime officia dolorum nemo porro sunt, exercitationem eius voluptatem quidem dolore repellat deleniti commodi rerum accusantium quisquam nostrum. Porro, provident corporis."
        />
        <ChatBubble text="That's awesome to hear!" />
        <ChatBubble isLeft text="What have you been up to lately?" />
        <ChatBubble text="Just working on some projects." />
        <ChatBubble isLeft text="Anything interesting?" />
        <ChatBubble text="Not really, just the usual stuff." />
        <ChatBubble isLeft text="I see. Well, keep up the good work!" />
        <ChatBubble text="Thanks, I appreciate it!" />
        <ChatBubble
          isLeft
          text="Do you have any plans for the weekend?Because I have some , but I wanted to confirm from your side as well"
        />
        <ChatBubble text="Not yet, but I'm thinking of going hiking." />
        <ChatBubble isLeft text="That sounds like fun!" />
        <ChatBubble text="Yeah, I'm looking forward to it." />
        <ChatBubble isLeft text="I wish I could join you." />
        <ChatBubble text="Maybe next time!" />
        <ChatBubble isLeft text="Definitely!" />
        <ChatBubble text="Well, I should get back to work now." />
        <ChatBubble isLeft text="Alright, talk to you later!" />
        <ChatBubble text="Take care!" />
      </View>
    </ScrollView>
  );
};

export default ChatBlock;

const styles = StyleSheet.create({
  container: {flex: 1},
  chatContainer: {
    backgroundColor: 'white',
    height: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.lightgray3,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  chatBubbleContainer: {
    maxWidth: '80%',
    marginVertical: 10,
  },
  chatBubble: {flexDirection: 'row'},
  profileImage: {
    height: chatBubbleProfileImage,
    width: chatBubbleProfileImage,
    borderRadius: chatBubbleProfileImage / 2,
    marginRight: 10,
  },
  chatBubbleText: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 5,
    paddingVertical: 12,
    fontFamily: POPPINS.Regular,
    fontSize: 14,
  },
  chatBubbleTime: {
    fontFamily: POPPINS.Black,
    fontSize: 12,
    textAlign: 'right',
    color: '#bcbdbd',
  },
});
