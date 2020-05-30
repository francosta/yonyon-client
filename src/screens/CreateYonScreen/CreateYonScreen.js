import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CreateYonScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is the CreateYonScreen</Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'CreateYonScreen',
    headerRight: () => <Text></Text>,
    headerLeft: () => <Text></Text>,
  };
};

export default CreateYonScreen;
