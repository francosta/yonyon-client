import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const YonText = ({ yon, answerStatus }) => {
  const styles = EStyleSheet.create({
    container: {
      backgroundColor: '$textColor',
      flex: 1,
      justifyContent: 'center',
    },
    questionText: {
      // color: '$primaryColourShade1',
      color: answerStatus ? 'grey' : '#310B3B',
      fontSize: '$h1Size',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{yon.yon}</Text>
    </View>
  );
};

export default YonText;
