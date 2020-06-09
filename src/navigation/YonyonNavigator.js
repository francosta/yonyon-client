import React from 'react';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Platform, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Analytics from 'expo-firebase-analytics';
import navLogo from '../../assets/navLogo.png';

// Screen imports
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import AuthScreen from '../screens/AuthScreen/AuthScreen';
import YonScreen from '../screens/YonScreen/YonScreen';
import CreateYonScreen from '../screens/CreateYonScreen/CreateYonScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

//Analytics
// Gets the current screen from navigation state
const getActiveRouteName = (state) => {
  if (!state) return;
  const route = state.routes[state.index];

  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }

  return route.name;
};

// Tab Navigator
const MainTabNavigator = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <MainTabNavigator.Navigator
      tabBarOptions={{
        style: { height: '10%' },
        activeBackgroundColor: '#F4F4F4',
        inactiveBackgroundColor: '#F4F4F4',
      }}
    >
      <MainTabNavigator.Screen
        name="Yon"
        component={YonScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={35} color="#797979" />
          ),
        }}
      />
      <MainTabNavigator.Screen
        name="Create"
        component={CreateYonScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Image source={navLogo} />,
          tabBarLabel: () => null,
        }}
      />
      <MainTabNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={30} color="#797979" />
          ),
        }}
      />
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

  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();

  React.useEffect(() => {
    const state = navigationRef.current.getRootState();

    // Save the initial route name
    routeNameRef.current = getActiveRouteName(state);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={(state) => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(state);

        if (previousRouteName !== currentRouteName) {
          Analytics.setCurrentScreen(currentRouteName);
        }
        // Save the current route name for later comparision
        routeNameRef.current = currentRouteName;
      }}
    >
      {isAuth && <MainNavigator />}
      {!isAuth && didTryAutoLogin && <AuthScreen />}
      {!isAuth && !didTryAutoLogin && <SplashScreen />}
    </NavigationContainer>
  );
};

export default YonYonNavigationContainer;
