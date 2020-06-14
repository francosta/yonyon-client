import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import YonStat from '../YonStats/YonStat';

const AnswersBar = ({ answers, answerStatus }) => {
  const total = answers.length;
  const yesAnswers = answers.filter((answer) => answer.answer === true).length;
  const noAnswers = answers.filter((answer) => answer.answer === false).length;

  const yesPercent = (yesAnswers / total) * 100;
  const noPercent = (noAnswers / total) * 100;

  const styles = EStyleSheet.create({
    container: {
      flex: 1,
      marginTop: '2rem',
      marginHorizontal: '2rem',
    },
    barContainer: {
      flexDirection: 'row',
      height: '3rem',
      flex: 1,
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
    statContainer: {
      flexDirection: 'row',
      marginTop: '1rem',
      justifyContent: 'space-between',
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
      <View style={styles.barContainer}>
        <View style={styles.yes}></View>
        <View style={styles.no}></View>
      </View>
      <View style={styles.statContainer}>
        <YonStat answer={true} data={yesPercent} />
        <YonStat answer={false} data={noPercent} />
      </View>
    </View>
  );
};

export default AnswersBar;
