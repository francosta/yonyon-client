import React from 'react';
import { View } from 'react-native';
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
  buttonsContainer: {
    height: '25%',
    width: '100%',
    flexDirection: 'column',
  },
  skipButtonContainer: {
    flex: 1,
  },
  yesNoButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
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
      {answerStatus && (
        <YonCardTopBar answers={yon.answers} answerStatus={answerStatus} />
      )}
      <YonText yon={yon} answerStatus={answerStatus} />
      {answerStatus ? (
        <View style={styles.buttonsContainer}>
          <AnswerButton
            backgroundColor="#56205C"
            text="Next"
            clickHandler={nextYon}
          />
        </View>
      ) : (
        <View style={styles.buttonsContainer}>
          <View style={styles.skipButtonContainer}>
            <AnswerButton
              backgroundColor="grey"
              text="Skip"
              clickHandler={nextYon}
            />
          </View>
          <View style={styles.yesNoButtonContainer}>
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
        </View>
      )}
    </View>
  );
};

export default YonCard;
