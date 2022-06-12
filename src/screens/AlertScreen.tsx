import React from 'react';
import { View, Button, Alert } from 'react-native';

import prompt from 'react-native-prompt-android';

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

     const showPrompt = () => {
          // funciona solo en IOS
          // Alert.prompt(
          //      'Esta seguro?',
          //      'Esta accion no se puede revertir',
          //      (valor: string) => console.log('info:', valor), // valor en realidad es de tipo object
          //      'plain-text',
          //      'Hola mundo', // placeholder
          //      'number-pad' // email-adress
          // );

          prompt(
               'Enter password',
               'Enter your password to claim your $1.5B in lottery winnings',
               [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
               ],
               {
                    type: 'secure-text',
                    cancelable: false,
                    defaultValue: 'test',
                    placeholder: 'placeholder',
               }
          );
     };


     return (
          <View style={styles.globalMargin}>
               <HeaderTitle title="Alerts" color={'#5C2179'} />

               <Button
                    title="Mostrar alerta"
                    onPress={showAlert}
               />

               <View style={{ height: 10 }} />

               <Button
                    title="Mostrar alerta"
                    onPress={showPrompt}
               />

          </View>
     );
};

export default AlertScreen;
