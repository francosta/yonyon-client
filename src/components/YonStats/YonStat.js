import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  text: {
    marginRight: 10,
    fontSize: '$labelSize',
    fontFamily: 'circular-standard',
  },
});

const YonStat = ({ answer, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Math.floor(data)}%</Text>
      <FontAwesome
        name={answer ? 'thumbs-up' : 'thumbs-down'}
        size={15}
        color="black"
      />
    </View>
  );
};

export default YonStat;
