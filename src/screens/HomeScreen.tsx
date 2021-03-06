import { View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import FlatListMenuItems from '../components/FlatListMenuItems';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';

const HomeScreen = () => {

     <ItemSeparator />;

     return (

          <View style={{ flex: 1, ...styles.globalMargin }}>

               <FlatList
                    data={menuItems}
                    //funcion que regresa un elemento JSX
                    // item es la iteracion de la data que se encuentra en la data => menuItems
                    renderItem={({ item }) => <FlatListMenuItems menuItem={item} />}
                    keyExtractor={(item) => item.name}
                    ListHeaderComponent={() => <HeaderTitle title="Menu Options" color={'#5C2179'} />}
                    ItemSeparatorComponent={() => <ItemSeparator />}
               />

          </View>

     );
};

export default HomeScreen;
