import { View, ScrollView, RefreshControl } from 'react-native';
import React, { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PullToRefreshScreen = () => {

     const { top } = useSafeAreaInsets();

     const [refreshing, setRefreshing] = useState(false);
     const [data, setData] = useState<string>();

     const onRefresh = () => {
          setRefreshing(true);

          setTimeout(() => {
               console.log('termino la refresh');
               setRefreshing(false);
               setData('Hola mundo');
          }, 3000);
     };

     return (
          <ScrollView
               style={{
                    marginTop: refreshing ? top : 0,
               }}
               refreshControl={
                    <RefreshControl
                         refreshing={refreshing}
                         onRefresh={onRefresh}
                         progressViewOffset={10}
                         progressBackgroundColor="#5856D6"
                         // para IOS
                         colors={['white', 'red', 'orange']}
                         style={{ backgroundColor: "#5856D6" }}
                         tintColor="white"
                         title="Refreshing"
                         titleColor="white"
                    />
               }
          >

               <View style={styles.globalMargin}>
                    <HeaderTitle title="Pull to refresh" />

                    {
                         data && <HeaderTitle title={data} color="green" />
                    }



               </View >
          </ScrollView>
     );
};

export default PullToRefreshScreen;


