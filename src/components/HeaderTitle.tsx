import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';


interface Props {
     title: string,
     color?: string,
}

const HeaderTitle = ({ title, color = 'black' }: Props) => {

     const { top } = useSafeAreaInsets();
     const { theme: { colors } } = useContext(ThemeContext);

     return (
          <View style={{ marginTop: top + 20, marginBottom: 15 }}>
               <Text style={{
                    ...styles.title,
                    color: colors.text,
               }}>{title}</Text>
          </View>
     );
};

export default HeaderTitle;
