import React, {useEffect} from 'react';
import Routers from './src/routers';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
}
