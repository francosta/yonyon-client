import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SplashScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is the SplashScreen</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'SplashScreen',
    headerRight: () => <Text></Text>,
    headerLeft: () => <Text></Text>,
  };
};

export default SplashScreen;
