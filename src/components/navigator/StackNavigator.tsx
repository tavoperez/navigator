import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Pag1Screns } from '../../screens/Pag1Screns';
import { Pag2Screns } from '../../screens/Pag2Screen';
import { Pag3Screns } from '../../screens/Pag3Screns';
import { UserScreen } from '../../screens/UserScreen';

export type RootStackParams = {
  Pag2Screns: undefined,
  Pag3Screns: undefined,
  Pag1Screns: undefined,
  UserScreen: {id: number, name: string},
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNvigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName='Pag2Screns'
      screenOptions={{
        // headerShown: false,
        headerStyle:{
          elevation: 0,
          shadowColor: 'transparent'
        } ,
        cardStyle:{
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Pag1Screns" options={{title: 'Pagina 1'}} component={Pag1Screns} />
      <Stack.Screen name="Pag2Screns" options={{title: 'Pagina 2'}} component={Pag2Screns} />
      <Stack.Screen name="Pag3Screns" options={{title: 'Pagina 3'}} component={Pag3Screns} />
      <Stack.Screen name= "UserScreen" component={UserScreen}/>
    </Stack.Navigator>
  );
}