import React, {useContext} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeRoute from './home';
import AuthRoute from './auth';
import {useDispatch, useSelector} from 'react-redux';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const AppNavContainer = () => {
  const {isAuthenticated} = useSelector(state => state.auth);
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        {isAuthenticated ? <HomeRoute /> : <AuthRoute />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavContainer;
