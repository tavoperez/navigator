import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import { SettingsScreen } from '../../screens/SettingsScreen';
import { StackNvigator } from './StackNavigator';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../../theme/appTheme';


const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const {width} = useWindowDimensions()
  

  return (
    <Drawer.Navigator
    drawerContent={(props) => <MenuContent {...props}/>}
    screenOptions={{ 
      drawerType: width >= 768 ? 'permanent' : 'front',
      // hiden menu buton
      headerShown: false,
    }}
      // screenOptions={{drawerPosition:'right'}}
    >
      <Drawer.Screen name="StackNvigator" component={ StackNvigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuContent = ({navigation}: DrawerContentComponentProps) =>{
  return (
    <DrawerContentScrollView>
      {/* avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'
          }}
          style={styles.avatar}
        />
      </View>
      {/* option menu */}
      <View style={styles.menuContainer}>
          <TouchableOpacity 
          style={styles.btnMenu}
          onPress= {() => navigation.navigate('StackNvigator')}
          >
            <Text style={styles.menuText}>Navegacion</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.btnMenu}
          onPress= {() => navigation.navigate('SettingsScreen')}
          >
            <Text style={styles.menuText}>Ajustes</Text>
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}