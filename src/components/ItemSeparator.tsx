import { View } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';


const ItemSeparator = () => {

     const { theme: { dividerColor } } = useContext(ThemeContext);

     return (
          <View
               style={{
                    borderBottomWidth: 1,
                    // opacity: 0.4,
                    marginVertical: 8,
                    borderColor: dividerColor,
               }}
          />
     );
};

export default ItemSeparator;
