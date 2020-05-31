import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const AnswerButton = ({ color, text }) => {
  return (
    <Button
      titleStyle={{
        color: 'white',
        fontSize: 35,
      }}
      buttonStyle={{
        backgroundColor: color,
        paddingTop: 14,
        paddingBottom: 14,
      }}
      containerStyle={{
        flex: 1,
        borderTopRightRadius: text === 'Y' ? 50 : 0,
        borderBottomRightRadius: text === 'Y' ? 50 : 0,
        borderTopLeftRadius: text === 'N' ? 50 : 0,
        borderBottomLeftRadius: text === 'N' ? 50 : 0,
        marginRight: text === 'Y' ? 9 : 0,
        marginLeft: text === 'N' ? 9 : 0,
      }}
      title={text}
    />
  );
};

export default AnswerButton;
