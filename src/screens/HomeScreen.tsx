import { View, Text } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/appInterfaces';
import FlatListMenuItems from '../components/FlatListMenuItems';


const menuItems: MenuItem[] = [
     {
          name: 'animation 101',
          icon: 'car-sport-outline',
          component: 'Animation101Screen',
     },
     {
          name: 'animation 102',
          icon: 'business-outline',
          component: 'Animation102Screen',
     },
];

const HomeScreen = () => {

     const { top } = useSafeAreaInsets();

     const renderListHeader = () => {
          return (
               <View style={{ marginTop: top + 20, marginBottom: 20, /* backgroundColor: 'red' */ }}>
                    <Text style={styles.title}>Opciones de Menu</Text>
               </View>
          );
     };

     const itemSeparator = () => {
          return (
               <View
                    style={{
                         borderBottomWidth: 1,
                         opacity: 0.4,
                         marginVertical: 8,
                    }}
               />
          );
     };

     return (

          <View style={{ flex: 1, ...styles.globalMargin, /* backgroundColor: 'grey'  */ }}>

               <FlatList
                    data={menuItems}
                    //funcion que regresa un elemento JSX
                    // item es la iteracion de la data que se encuentra en la data => menuItems
                    renderItem={({ item }) => <FlatListMenuItems menuItem={item} />}
                    keyExtractor={(item) => item.name}
                    ListHeaderComponent={() => renderListHeader()}
                    ItemSeparatorComponent={itemSeparator}
               />

          </View>

     );
};

export default HomeScreen;
