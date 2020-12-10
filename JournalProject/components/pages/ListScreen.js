import React, {useContext} from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';

import Header from '../constants/Header';
import { ScrollView } from 'react-native-gesture-handler';
import EntryContext from '../context/context';
import ListBlock from '../constants/ListBlock';
import styles from '../styles/styles';

export default function ListScreen({navigation}) {
  // get values necessary from context
  const {entries, listSelected} = useContext(EntryContext);

  // display screen with header and scrollable list
  return (
      <View style={styles.container}>
        <Header navigation={navigation}/>
        <ScrollView>
          {/* create object for each entry */}
          {entries ? entries.map((entry) => 
                  <ListBlock entry={entry} navigation={navigation} list={listSelected}key={entry.id}/>
          ) : ''}
        </ScrollView>
      </View>
    );
  }