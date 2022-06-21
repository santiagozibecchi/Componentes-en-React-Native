import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {

     const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext);

     return (
          <View style={styles.globalMargin}>
               <HeaderTitle title="Theme" />

               <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
               }}>

                    <TouchableOpacity
                         onPress={setLightTheme}
                         activeOpacity={0.8}
                         style={{
                              backgroundColor: colors.primary,
                              justifyContent: 'center',
                              width: 150,
                              height: 50,
                              borderRadius: 20,
                         }}>
                         <Text style={{
                              color: 'white',
                              textAlign: 'center',
                              fontSize: 20,
                         }}>
                              Light
                         </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress={setDarkTheme}
                         activeOpacity={0.8}
                         style={{
                              backgroundColor: colors.primary,
                              justifyContent: 'center',
                              width: 150,
                              height: 50,
                              borderRadius: 20,
                         }}>
                         <Text style={{
                              color: 'white',
                              textAlign: 'center',
                              fontSize: 20,
                         }}>
                              Dark
                         </Text>
                    </TouchableOpacity>

               </View>

          </View>
     );
};



export default ChangeThemeScreen;
