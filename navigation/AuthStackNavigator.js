import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const authStackNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen
  },
  config
);

export default authStackNavigator;
