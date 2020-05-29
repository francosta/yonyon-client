import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';

// REDUX IMPORTS
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// FONTS
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import './src/constants/EStylesheet';

const fetchFonts = () => {
  return Font.loadAsync({
    'circular-standard': require('./assets/fonts/CircularStd-Book.ttf'),
    'circular-bold': require('./assets/fonts/CircularStd-Bold.ttf'),
  });
};

const styles = EStylesheet.create({
  container: {
    flex: 1,
    backgroundColor: '$secondaryColourShade3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '$smBodySize',
  },
});

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
}
