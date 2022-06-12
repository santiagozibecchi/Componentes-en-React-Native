import { View, Text } from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const ModalScreen = () => {
     return (
          <View style={styles.globalMargin}>
               <HeaderTitle title="Modal Screen" />
          </View>
     );
};

export default ModalScreen;
