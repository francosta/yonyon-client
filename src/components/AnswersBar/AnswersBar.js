import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const AnswersBar = ({ answers, answerStatus }) => {
  const total = answers.length;
  const yesAnswers = answers.filter((answer) => answer.answer === true).length;
  const noAnswers = answers.filter((answer) => answer.answer === false).length;

  const yesPercent = (yesAnswers / total) * 100;
  const noPercent = (noAnswers / total) * 100;

  const styles = EStyleSheet.create({
    container: {
      flexDirection: 'row',
      height: '3rem',
      flex: 1,
      marginTop: '2rem',
      marginHorizontal: '2rem',
    },
    no: {
      backgroundColor: !answerStatus ? 'grey' : '$noNormal',
      width: `${noPercent}%`,
    },
    yes: {
      backgroundColor: !answerStatus ? 'grey' : '$yesNormal',
      width: `${yesPercent}%`,
    },
    text: {
      fontSize: 10,
    },
  });

  if (answers.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No answers yet...you're the first!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.yes}></View>
      <View style={styles.no}></View>
    </View>
  );
};

export default AnswersBar;
