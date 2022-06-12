import { View, Text, Button, Modal } from 'react-native';
import React, { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const ModalScreen = () => {

     const [isVisible, setIsVisible] = useState(false);

     return (
          <View style={styles.globalMargin}>
               <HeaderTitle title="Modal Screen" />

               <Button
                    title="Abrir modal"
                    onPress={() => setIsVisible(!isVisible)}
               />

               <Modal
                    animationType="fade"
                    visible={isVisible}
                    transparent
               >
                    {/* Background */}
                    <View style={{
                         flex: 1,
                         backgroundColor: 'rgba(0,0,0,0.5)',
                         justifyContent: 'center',
                         alignItems: 'center',
                    }}>
                         {/* Contenido del modal Lo que vamos a mostrar al usuario */}
                         <View style={{
                              width: 300,
                              height: 200,
                              backgroundColor: 'white',
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 20,
                              borderWidth: 1,
                              borderColor: 'rgba(0,0,0,0.2)',
                              shadowOffset: {
                                   width: 0,
                                   height: 10,
                              },
                              shadowOpacity: 0.25,
                              elevation: 15,
                         }}>
                              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Modal</Text>
                              <Text style={{ fontSize: 16, marginBottom: 30 }}>Cuerpo del modal</Text>
                              <Button
                                   title="Cerrar"
                                   onPress={() => setIsVisible(!isVisible)}
                              />
                         </View>

                    </View>

               </Modal>

          </View>
     );
};

export default ModalScreen;
