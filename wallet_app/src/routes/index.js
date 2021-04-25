import React, {useContext} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeRoute from './home';
import AuthRoute from './auth';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const AppNavContainer = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <AuthRoute />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavContainer;
