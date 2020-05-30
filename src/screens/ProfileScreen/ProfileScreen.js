import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ProfileScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is the ProfileScreen</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'ProfileScreen',
    headerRight: () => <Text></Text>,
    headerLeft: () => <Text></Text>,
  };
};

export default ProfileScreen;
