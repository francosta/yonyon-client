import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Image } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import AnswersBar from '../AnswersBar/AnswersBar';
import YonText from '../YonText/YonText';
import AnswerButton from '../AnswerButton/AnswerButton';

const styles = EStyleSheet.create({
  cardContainer: {
    backgroundColor: '$textColor',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: '1.1875rem',
    paddingLeft: '1.1875rem',
  },
  avatar: {
    height: '1.9375rem',
    width: '1.9375rem',
  },
  answersBar: {
    marginRight: '1.375rem',
    flex: 7,
  },
  questionContainer: {
    flex: 2,
    height: '80%',
    paddingRight: '1.1875rem',
    paddingLeft: '1.1875rem',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  noButton: {
    backgroundColor: '#D1B63E', //primary shade 1
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yesButton: {
    backgroundColor: '#56205C', //primaryshade3
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '$textColor',
    fontSize: '$h1Size',
    fontWeight: 'bold',
  },
});

const YonCard = ({ yon, asnwerYon, answerStatus }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topBar}>
        <AnswersBar answers={yon.answers} answerStatus={answerStatus} />
      </View>
      <YonText yon={yon} answerStatus={answerStatus} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <View style={styles.yesButton}>
            <Text>Y</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.noButton}>
            <Text>Y</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default YonCard;
