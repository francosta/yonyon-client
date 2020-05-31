import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AnswersBar from '../AnswersBar/AnswersBar';
import avatar from '../../../assets/avatar.png';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    height: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '4%',
  },
});

const YonCardTopBar = ({ answers, answerStatus }) => {
  return (
    <View style={styles.container}>
      <AnswersBar answers={answers} answerStatus={answerStatus} />
    </View>
  );
};

export default YonCardTopBar;
