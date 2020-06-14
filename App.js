import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import YonYonNavigationContainer from './src/navigation/YonyonNavigator';
import * as Analytics from 'expo-firebase-analytics';
import { yonReducer } from './src/store/reducers/yon';
import { authReducer } from './src/store/reducers/auth';

// Disable the warning & log messages on the Expo client
Analytics.setUnavailabilityLogging(false);
// Analytics.setDebugModeEnabled(true);

// FONTS
import './src/constants/EStylesheet';

const rootReducer = combineReducers({
  yon: yonReducer,
  auth: authReducer,
});

const middleware = [ReduxThunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

const fetchFonts = () => {
  return Font.loadAsync({
    'circular-standard': require('./assets/fonts/CircularStd-Book.ttf'),
    'circular-bold': require('./assets/fonts/CircularStd-Bold.ttf'),
  });
};

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
