import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{}

export const Pag3Screns = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pag3Screns</Text>

        <Button
          title='regresar'
          onPress={() => navigation.pop()}
        />
        <Button
          title='Ir al home'
          onPress={() => navigation.popToTop()}
        />
    </View>
  )
}