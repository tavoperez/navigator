import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../components/navigator/StackNavigator';

// interface RouteParams {
//     id: number,
//     name: string
// }

interface Props extends StackScreenProps<RootStackParams, 'UserScreen'>{}

export const UserScreen = ({route, navigation}: Props) => {
    // console.log(JSON.stringify(props, null, 3))

    // const params= route.params as RouteParams
    const params= route.params

    useEffect(() => {
      navigation.setOptions({
        title: params!.name
      })
    }, [])
    

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            {
                JSON.stringify(params, null, 3)
            }
        </Text>
    </View>
  ) 
}
