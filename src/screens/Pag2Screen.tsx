import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any>{}

export const Pag2Screns = ({navigation}: Props ) => {


  useEffect(() => {
    navigation.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atras' // solo ios
    })
  }, [])
  

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pag2Screns</Text>

        <Button
          title='Ir pagina 3'
          onPress={() => navigation.navigate('Pag3Screns')}
        />
    </View>
  )
}