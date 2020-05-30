import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const YonScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is the YonScreen</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'YonScreen',
    headerRight: () => <Text></Text>,
    headerLeft: () => <Text></Text>,
  };
};

export default YonScreen;
