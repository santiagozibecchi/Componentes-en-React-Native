import React, { useState } from 'react';
import { Platform, Switch } from 'react-native';

interface Props {
     isOn: boolean,
     onChange: (value: boolean) => void,
}

const CustomSwitch = ({ isOn, onChange }: Props) => {

     const [isEnabled, setIsEnabled] = useState(isOn);
     // coloco un cuerpo en toggleSwtch, para que no simplemente se llame la funcion
     const toggleSwitch = () => {
          setIsEnabled(!isEnabled);
          onChange(!isEnabled);
     };

     return (
          <Switch
               trackColor={{ false: "#D9D9D9", true: "#9595e5" }}
               thumbColor={(Platform.OS === 'android') ? '#5856D6' : ''}
               // ios_backgroundColor="#3e3e3e"
               onValueChange={toggleSwitch}
               value={isEnabled}
          />
     );
};

export default CustomSwitch;
