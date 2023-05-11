import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { SettingsScreen } from '../../screens/SettingsScreen';
import { StackNvigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';


const Drawer = createDrawerNavigator();

export const MenuLateralBasic = () => {

  const {width} = useWindowDimensions()
  

  return (
    <Drawer.Navigator
    screenOptions={{ drawerType: width >= 768 ? 'permanent' : 'front' }}
      // screenOptions={{drawerPosition:'right'}}
    >
      <Drawer.Screen name="StackNvigator" options={{title: 'Home'}} component={ StackNvigator} />
      <Drawer.Screen name="SettingsScreen" options={{title: 'Ajustes'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}