import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNvigator } from './src/components/navigator/StackNavigator';
// import { MenuLateralBasic } from './src/components/navigator/MenuLateralBasic';
import { MenuLateral } from './src/components/navigator/MenuLateral';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNvigator/> */}
      {/* <MenuLateralBasic/> */}
      <MenuLateral/>
    </NavigationContainer>
  );
}

