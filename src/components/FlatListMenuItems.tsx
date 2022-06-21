import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { ThemeContext } from '../context/themeContext/ThemeContext';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
     menuItem: MenuItem,
}

const FlatListMenuItems = ({ menuItem }: Props) => {

     const navigation = useNavigation();
     const { theme: { colors } } = useContext(ThemeContext);

     return (

          <TouchableOpacity
               activeOpacity={0.8}
               onPress={() => navigation.dispatch(
                    CommonActions.navigate({
                         name: menuItem.component,
                    })
               )}
          >

               <View style={styles.container}>

                    <Icon
                         name={menuItem.icon}
                         color={colors.primary}
                         size={22}
                    />

                    <Text style={{
                         ...styles.itemText,
                         color: colors.text,
                    }}>
                         {menuItem.name}
                    </Text>

                    {/* View que por tener flex de 1 ocupa todo el espacio que puede */}
                    <View style={{
                         flex: 1,
                    }} />

                    <Icon
                         name="chevron-forward-outline"
                         color={colors.primary}
                         size={22}
                    />

               </View>

          </TouchableOpacity>
     );
};

const styles = StyleSheet.create({
     container: {
          flexDirection: 'row',
     },
     itemText: {
          marginLeft: 8,
          fontSize: 18,
     },
     chevronIcon: {
          backgroundColor: 'red',
     },
});

export default FlatListMenuItems;
