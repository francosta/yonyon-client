import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AnswersBar from '../AnswersBar/AnswersBar';
import YonText from '../YonText/YonText';
import AnswerButton from '../AnswerButton/AnswerButton';
import YonCardTopBar from '../YonCardTopBar/YonCardTopBar';

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
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    marginTop: '4%',
    width: '100%',
  },
  questionContainer: {
    flex: 2,
    height: '80%',
    paddingRight: '1.1875rem',
    paddingLeft: '1.1875rem',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '18.7%',
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
  buttonText: {
    color: '$textColor',
    fontSize: '$h1Size',
    fontWeight: 'bold',
  },
});

const YonCard = ({ yon, answerYon, answerStatus, nextYon }) => {
  return (
    <View style={styles.cardContainer}>
      <YonCardTopBar answers={yon.answers} answerStatus={answerStatus} />
      <YonText yon={yon} answerStatus={answerStatus} />

      {answerStatus ? (
        <View style={styles.buttonContainer}>
          <AnswerButton
            backgroundColor="#56205C"
            text="Next"
            clickHandler={nextYon}
          />
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <AnswerButton
            clickHandler={answerYon}
            backgroundColor="#56205C"
            text="Y"
          />
          <AnswerButton
            clickHandler={answerYon}
            backgroundColor="#D1B63E"
            text="N"
          />
        </View>
      )}
    </View>
  );
};

export default YonCard;
