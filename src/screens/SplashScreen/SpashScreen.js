import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import splashLogo from '../../../assets/splashLogo.png';
import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';

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

const SplashScreen = () => {
  const dispatch = useDispatch();

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
