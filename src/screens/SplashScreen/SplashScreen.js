import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useDispatch } from 'react-redux';
import splashLogo from '../../../assets/splashLogo.png';
import * as authActions from '../../store/actions/auth';

const styles = EStyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$primaryColorShade1',
  },
  logo: {
    height: '10.471875rem',
    width: '16.1875rem',
  },
});

/**
 * @function SplashScreen - Functional component that renders the Splash screen, which is the first entry point to the application.
 * @returns {JSXElement} - Returns the SplashScreen react component.
 */
const SplashScreen = () => {
  const dispatch = useDispatch();

  /**
   * @function useEffect - React useEffect hook which dispatches the tryLocalSignIn action. This action will check for a token on local storage and try to automatically sign in.
   */
  useEffect(() => {
    dispatch(authActions.tryLocalSignIn());
  }, [dispatch]);

  

  return (
    <View data-test="splash-screen-container" style={styles.screen}>
      <Image data-test="yonyon-logo" style={styles.logo} source={splashLogo} />
    </View>
  );
};

export default SplashScreen;
