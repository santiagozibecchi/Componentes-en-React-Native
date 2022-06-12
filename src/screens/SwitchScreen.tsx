import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';


const SwitchScreen = () => {

     const [state, setState] = useState({
          isActive: true,
          isHungry: false,
          isHappy: true,
     });

     // para que siempre esten en sincronia
     const { isActive, isHappy, isHungry } = state;

     // field => el campo que necesito modificar
     const onChange = (value: boolean, field: keyof typeof state) => {
          // nuevo estado
          setState({
               ...state,
               [field]: value,
          });
     };

     return (
          <View style={{ marginHorizontal: 20 }}>

               <HeaderTitle title="Switches" color={'#5C2179'} />

               <View style={styles.switchContainer}>
                    <Text style={styles.switchText}>isActive</Text>
                    <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
               </View>

               <View style={styles.switchContainer}>
                    <Text style={styles.switchText}>isHungry</Text>
                    <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
               </View>

               <View style={styles.switchContainer}>
                    <Text style={styles.switchText}>isHappy</Text>
                    <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
               </View>

               <Text style={{
                    ...styles.switchText,
                    marginTop: 50,
                    alignSelf: 'center',
               }}>
                    {JSON.stringify(state, null, 5)}
               </Text>


          </View>
     );
};

const styles = StyleSheet.create({
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

export default SwitchScreen;
