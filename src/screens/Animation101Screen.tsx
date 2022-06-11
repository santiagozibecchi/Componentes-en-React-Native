import { View, StyleSheet, Animated, Button } from 'react-native';
import React from 'react';
import useAnimation from '../hooks/useAnimation';

const Animation101Screen = () => {

     const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();

     return (
          <View style={styles.container}>

               {/* Para invocar las animaciones se utiliza Animated.View para que sean compatibles*/}
               <Animated.View style={{
                    ...styles.purpleBox,
                    marginBottom: 20,
                    opacity,
                    transform: [{
                         translateY: position,
                    }],
               }} />

               <View style={{ flexDirection: 'row', backgroundColor: '#5856D6' }}>

                    <View style={{ margin: 5 }}>
                         <Button
                              title="FadeIn"
                              onPress={() => {
                                   fadeIn();
                                   startMovingPosition(-200, 1000);
                              }}
                         />
                    </View>

                    <View style={{ margin: 5 }}>
                         <Button
                              title="FadeOut"
                              onPress={fadeOut}
                         />
                    </View>

               </View>

          </View>
     );
};

export default Animation101Screen;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },
     purpleBox: {
          backgroundColor: '#5856D6',
          width: 150,
          height: 150,
     },
});
