import { View, StyleSheet } from 'react-native';
import React from 'react';

const Animation102Screen = () => {
     return (
          <View style={{ flex: 1 }}>
               <View style={styles.purpleBox} />
          </View>
     );
};

export default Animation102Screen;

const styles = StyleSheet.create({
     purpleBox: {
          backgroundColor: '#5856',
          width: 150,
          height: 150,
     },
});
