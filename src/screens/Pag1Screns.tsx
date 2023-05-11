import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
// import { StackScreenProps } from '@react-navigation/stack'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { styles } from '../theme/appTheme'

// interface Props extends StackScreenProps<any, any>{}
interface Props extends DrawerScreenProps<any, any>{}

export const Pag1Screns = ({navigation}: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title='menu'
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }, [])
  

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pag1Screns</Text>

        <Button
          title='Ir pagina 2'
          onPress={() => navigation.navigate('Pag2Screns')}

        />

      <Text style={{
          marginVertical:20
        }}>Navegar con argumentos</Text>

        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
        style={{
          ...styles.btn,
        backgroundColor: '#F97B22'}}
          onPress={ () => navigation.navigate('UserScreen', {
            id: 1,
            name: 'pedro'
          })}
        >
          <Text style={styles.btmText}>pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{
          ...styles.btn,
        backgroundColor: '#A6D0DD'}}
          onPress={ () => navigation.navigate('UserScreen', {
            id: 2,
            name: 'tavo'
          })}
        >
          <Text style={styles.btmText}>tavo</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
