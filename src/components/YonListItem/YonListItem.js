import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const YonListItem = ({ yon }) => {
  const total = yon.answers.length;
  const yesAnswers = yon.answers.filter((answer) => answer.answer === true)
    .length;
  const noAnswers = yon.answers.filter((answer) => answer.answer === false)
    .length;
  const yesPercent = (yesAnswers / total) * 100;
  const noPercent = (noAnswers / total) * 100;

  const styles = EStyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '4.375rem',
    },
    answersContainer: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
    },
    yesBackground: {
      height: '100%',
      width: `${yesPercent}%`,
      backgroundColor: '$yesNormal',
      opacity: 0.2,
    },
    noBackground: {
      height: '100%',
      width: `${noPercent}%`,
      backgroundColor: '$noNormal',
      opacity: 0.2,
    },
    textContainer: {
      position: 'absolute',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    yon: {
      fontFamily: 'circular-standard',
      fontSize: '$h1Size',
      color: 'black',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.answersContainer}>
        <View style={styles.yesBackground} />
        <View style={styles.noBackground} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.yon}>{yon.yon}</Text>
      </View>
    </View>
  );
};

export default YonListItem;
