import React from 'react';
import { StatusBar } from 'react-native';

const YonStatusBar = ({ backgroundColor }) => {
  return (
    <StatusBar backgroundColor={backgroundColor} barStyle="light-content" />
  );
};

export default YonStatusBar;
