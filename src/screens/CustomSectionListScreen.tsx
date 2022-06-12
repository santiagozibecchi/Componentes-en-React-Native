import { SectionList, Text, View } from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import ItemSeparator from '../components/ItemSeparator';


interface Casas {
     casa: string;
     data: string[];
}

const casas: Casas[] = [
     {
          casa: "DC Comics",
          data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin",],
     },
     {
          casa: "Marvel Comics",
          data: ["Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman"],
     },
     {
          casa: "Anime",
          data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama"],
     },
];


const CustomSectionListScreen = () => {


     return (
          <View style={{
               ...styles.globalMargin,
               flex: 1,
          }}>
               {/* <HeaderTitle title="Section List" /> */}
               <SectionList
                    sections={casas}
                    keyExtractor={(item, index) => item + index}
                    stickySectionHeadersEnabled={true}

                    renderItem={({ item }) => <Text>{item}</Text>}

                    ListHeaderComponent={() => <HeaderTitle title="Section List" />}
                    ListFooterComponent={() => (
                         <View style={{ marginBottom: 80 }}>
                              <HeaderTitle title={'Total de casas ' + casas.length} />
                         </View>
                    )}

                    renderSectionHeader={({ section }) => (
                         <View style={{ backgroundColor: 'white' }}>
                              <HeaderTitle title={section.casa} />
                         </View>
                    )}

                    renderSectionFooter={({ section }) => (
                         <HeaderTitle title={'Total: ' + section.data.length} />
                    )}

                    SectionSeparatorComponent={() => <ItemSeparator />}
                    // ItemSeparatorComponent={() => <ItemSeparator />}

                    showsVerticalScrollIndicator={false}
               />

          </View>
     );
};

export default CustomSectionListScreen;