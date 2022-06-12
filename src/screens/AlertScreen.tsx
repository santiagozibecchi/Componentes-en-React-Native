import { View, Text, Button, Alert } from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const AlertScreen = () => {

     const showAlert = () => {

          Alert.alert(
               "Titulo de la alerta",
               "Alerta desde andriod",
               [
                    {
                         text: 'cancelar',
                         onPress: () => console.log('Cancel Pressed'),
                         style: 'cancel',
                    },
                    {
                         text: 'Ok',
                         onPress: () => console.log('Ok press'),
                    },
               ],
               // {
               //      cancelable: true,
               //      onDismiss: () => console.log('onDismiss'),
               // }
          );
     };


     return (
          <View style={styles.globalMargin}>
               <HeaderTitle title="Alerts" color={'#5C2179'} />

               <Button
                    title="Mostrar alerta"
                    onPress={showAlert}
               />

          </View>
     );
};

export default AlertScreen;
