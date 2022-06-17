import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import React, { useState } from 'react';
import useAnimation from '../hooks/useAnimation';

interface Props {
     uri: string,
     style?: StyleProp<ImageStyle>,
}

const FadeInImage = ({ uri, style }: Props) => {

     const { opacity, fadeIn } = useAnimation();
     // por defecto la img esta cargando
     const [isLoading, setIsLoading] = useState(true);

     const finishLoading = () => {
          setIsLoading(false);
          fadeIn();
     };

     return (
          <View style={{
               justifyContent: 'center',
               alignItems: 'center',
          }}>

               {
                    isLoading && <ActivityIndicator style={{ position: 'absolute' }} color="#5856D6" size={30} />
               }

               <Animated.Image
                    source={{ uri }}
                    onLoadEnd={() => finishLoading()}
                    style={{
                         ...style as any,
                         // width: '100%',
                         // height: 300,
                         opacity,
                    }}
               />
          </View>
     );
};

export default FadeInImage;
