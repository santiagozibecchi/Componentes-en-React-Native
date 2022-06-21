import React, { useContext, useState } from 'react';
import { Platform, Switch } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
     isOn: boolean,
     onChange: (value: boolean) => void,
}

const CustomSwitch = ({ isOn, onChange }: Props) => {

     const { theme: { colors } } = useContext(ThemeContext);


     const [isEnabled, setIsEnabled] = useState(isOn);
     // coloco un cuerpo en toggleSwtch, para que no simplemente se llame la funcion
     const toggleSwitch = () => {
          setIsEnabled(!isEnabled);
          onChange(!isEnabled);
     };

     return (
          <Switch
               trackColor={{ false: "#D9D9D9", true: "#9595e5" }}
               thumbColor={(Platform.OS === 'android') ? colors.card : ''}
               // ios_backgroundColor="#3e3e3e"
               onValueChange={toggleSwitch}
               value={isEnabled}
          />
     );
};

export default CustomSwitch;
