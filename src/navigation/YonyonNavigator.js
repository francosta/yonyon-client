import React from 'react';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Platform } from 'react-native';

// Screen imports
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import AuthScreen from '../screens/AuthScreen/AuthScreen';
import YonScreen from '../screens/YonScreen/YonScreen';
import CreateYonScreen from '../screens/CreateYonScreen/CreateYonScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

// Tab Navigator
const MainTabNavigator = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <MainTabNavigator.Navigator>
      <MainTabNavigator.Screen name="Yon" component={YonScreen} />
      <MainTabNavigator.Screen name="Create" component={CreateYonScreen} />
      <MainTabNavigator.Screen name="Profile" component={ProfileScreen} />
    </MainTabNavigator.Navigator>
  );
};

// YonYon Navigator
/**
 * @function YonYonNavigationContainer - Container component which holds the navigation state.
 * @returns {ReactComponent} - Navigation componeny that should wrap the App at the root level.
 */
const YonYonNavigationContainer = () => {
  const isAuth = useSelector((state) => !!state.auth.token);
  const didTryAutoLogin = useSelector((state) => state.auth.triedLocalSignIn);

  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {!isAuth && didTryAutoLogin && <AuthScreen />}
      {!isAuth && !didTryAutoLogin && <SplashScreen />}
    </NavigationContainer>
  );
};

export default YonYonNavigationContainer;
