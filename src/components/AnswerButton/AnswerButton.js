import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  buttonText: {
    fontSize: '$h1Size',
    fontWeight: 'bold',
    color: '$textColor',
  },
});

const AnswerButton = ({ backgroundColor, text, clickHandler }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: backgroundColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => {
        clickHandler(text === 'Y' ? true : false);
      }}
    >
      <View>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AnswerButton;
