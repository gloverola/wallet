import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import CreateAccount from '../screens/auth/CreateAccount';
import Onboarding from '../screens/auth/Onboarding';

const Auth = createStackNavigator();

const AuthRoute = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen name="Onboading" component={Onboarding} />
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="Register" component={CreateAccount} />
    </Auth.Navigator>
  );
};

export default AuthRoute;
