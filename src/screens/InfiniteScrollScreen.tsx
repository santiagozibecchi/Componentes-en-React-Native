import { View, StyleSheet, Image, FlatList, ActivityIndicatorComponent, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import FadeInImage from '../components/FadeInImage';

const InfiniteScrollScreen = () => {

     const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

     const loadMore = () => {

          const newArray: number[] = [];

          for (let i = 0; i < 5; i++) {
               newArray[i] = numbers.length + i;
          }
          setNumbers([...numbers, ...newArray]);

     };

     const renderItem = (item: number) => {
          return (
               <FadeInImage
                    uri={`https://picsum.photos/id/${item}/400/300`}
                    style={{
                         width: '100%',
                         height: 300,
                    }}
               />
          );

          // <Image
          //      source={{ uri: `https://picsum.photos/id/${item}/400/300` }}
          //      style={{
          //           width: '100%',
          //           height: 300,
          //      }}
          // />
     };

     return (
          <View style={{ flex: 1 }}>

               <FlatList
                    data={numbers}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({ item }) => renderItem(item)}

                    ListHeaderComponent={() => (
                         <View style={{ alignItems: 'center' }}>
                              <HeaderTitle title="Infite Scroll" />
                         </View>
                    )}

                    // cuando estoy en el final
                    onEndReached={loadMore}
                    // A qué distancia del final, debe estar el borde inferior de la lista desde el final
                    // del contenido para activar la devolución de llamada onEndReached
                    onEndReachedThreshold={0.5}

                    ListFooterComponent={() => (
                         <View style={{
                              height: 150,
                              width: '100%',
                              justifyContent: 'center',
                              alignItems: 'center',
                         }}>
                              <ActivityIndicator size={40} color="5856D6" />
                         </View>
                    )}


               />

          </View>
     );
};

const styles = StyleSheet.create({
     textItem: {
          backgroundColor: 'green',
          height: 150,
     },
});

export default InfiniteScrollScreen;
