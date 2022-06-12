import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import React, { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';

interface TextProps {
     name: string,
     email: string,
     phone: string,
     isSubscribed: boolean,
}

const TextInputScreen = () => {

     const { onChange, form } = useForm<TextProps>({
          name: '',
          email: '',
          phone: '',
          isSubscribed: false,
     });

     const { isSubscribed } = form;

     return (
          <KeyboardAvoidingView
               behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
               <ScrollView>
                    <TouchableWithoutFeedback
                         onPress={Keyboard.dismiss}
                    >
                         <View style={styles.globalMargin}>
                              <HeaderTitle title="Text input" color={'#5C2179'} />

                              <TextInput
                                   style={stylesText.inputStyle}
                                   placeholder="Ingrese su nombre"
                                   autoCorrect={false}
                                   autoCapitalize="words"
                                   onChangeText={(value) => onChange(value, 'name')}
                              />
                              <TextInput
                                   style={stylesText.inputStyle}
                                   placeholder="Ingrese su email"
                                   autoCorrect={false}
                                   autoCapitalize="none"
                                   onChangeText={(value) => onChange(value, 'email')}
                                   keyboardType="email-address"
                              />

                              <View style={stylesText.switchContainer}>
                                   <Text style={stylesText.switchText}>Suscribirse</Text>
                                   <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
                              </View>

                              <HeaderTitle title={JSON.stringify(form, null, 3)} />
                              <HeaderTitle title={JSON.stringify(form, null, 3)} />

                              <TextInput
                                   style={stylesText.inputStyle}
                                   placeholder="Ingrese su telefono"
                                   onChangeText={(value) => onChange(value, 'phone')}
                                   keyboardType="number-pad"
                              />

                              <View style={{ height: 80 }} />

                         </View>


                    </TouchableWithoutFeedback>
               </ScrollView>
          </KeyboardAvoidingView>
     );
};

const stylesText = StyleSheet.create({
     inputStyle: {
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.4)',
          height: 40,
          paddingHorizontal: 10,
          borderRadius: 10,
          marginVertical: 10,
     },
     switchContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 5,
     },
     switchText: {
          fontSize: 25,
     },
});

export default TextInputScreen;
