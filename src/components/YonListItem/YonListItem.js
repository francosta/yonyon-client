import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const YonListItem = ({ yon }) => {
  return (
    <View style={styles.container}>
      <Text>{yon.yon}</Text>
    </View>
  );
};

export default YonListItem;
