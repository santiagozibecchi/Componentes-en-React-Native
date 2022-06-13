import { View, Text } from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const InfiniteScrollScreen = () => {
     return (
          <View style={styles.globalMargin}>
               <HeaderTitle title="Infite Scroll" />
          </View>
     );
};

export default InfiniteScrollScreen;
