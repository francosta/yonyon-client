import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';
import YonYonNavigationContainer from './src/navigation/YonyonNavigator';

// REDUX IMPORTS
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './src/store/reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

const middleware = [ReduxThunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '$h2Size',
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
    <Provider store={store}>
      <YonYonNavigationContainer />
    </Provider>
  );
}
