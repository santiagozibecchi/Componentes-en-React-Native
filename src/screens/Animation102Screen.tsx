import { View, StyleSheet, Animated, PanResponder } from 'react-native';
import React, { useRef } from 'react';

const Animation102Screen = () => {

     const moveAway = useRef(new Animated.ValueXY()).current;

     const moveAwayResponder = PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onPanResponderMove: Animated.event([
               null,
               {
                    dx: moveAway.x,
                    dy: moveAway.y,
               },
          ],
               { useNativeDriver: false }
          ),
          // Cuando el usuario suelta el objeto
          onPanResponderRelease: () => {
               Animated.spring(
                    moveAway,
                    {
                         toValue: { x: 0, y: 0 },
                         useNativeDriver: false,
                    }
               ).start();
          },
     });

     return (
          <View style={styles.container}>
               <Animated.View
                    {...moveAwayResponder.panHandlers}
                    style={[moveAway.getLayout(), styles.boxContent]} />
          </View>
     );
};

export default Animation102Screen;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },
     boxContent: {
          backgroundColor: '#5856',
          borderRadius: 100,
          width: 150,
          height: 150,
     },
});
