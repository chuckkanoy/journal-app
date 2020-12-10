import React, {useState, useContext} from 'react';
import {Text, TextInput, View} from 'react-native';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../constants/Header';
import EntryContext from '../context/context';
import ListBlock from '../constants/ListBlock';
import styles from '../styles/styles';

export default function Search({navigation, route}) {
  // https://reactnavigation.org/docs/params/
  const {searchString} = route.params;

  // declare and initialize state
  const [foundEntries, setFoundEntries] = useState([]);

  // get necessary values from context
  const {entries} = useContext(EntryContext);

  // declare suggestions context for when no results are found
  const suggestions = <Text>{`  No results matched your search\n
        Try:\n
          - Entering a single emoji (either 🙁, 😐, or 🙂)\n
          - Entering a date (YYYY-MM-DD)\n
          - Entering a title`}</Text>;

  // search through entries and update state as needed
  const searchEntries = (search) => {
    var updated = foundEntries;

    entries.forEach(entry => {
      if(search) {
        if(entry.date.includes(search)) {
          if(!foundEntries.includes(entry)) {
              updated = [...updated, entry];
          }
        }
        else if(entry.mood.includes(search)) {
          if(!foundEntries.includes(entry)) {
            updated = [...updated, entry];
          }
        }
        else if(entry.title.includes(search)) {
          if(!foundEntries.includes(entry)) {
            updated = [...updated, entry];
          }
        } else {
          var removed = [];
          // only add entries that match to updated
          for(var i = 0; i < updated.length; i++) {
            if(updated[i].id !== entry.id) {
              removed.push(updated[i]);
            } 
          }
          updated = removed;
        }
      } else {
        updated = [];
      }
    });

    setFoundEntries(updated);
  }

  // display screen with header and either scrollable 
  // list of results or suggestions contant
  return (
      <View style={styles.container}>
          <Header navigation={navigation}/>
          <TextInput 
            style={styles.search}
            defaultValue={searchString}
            onChangeText={(text) => 
              searchEntries(text)}
          />
          <ScrollView>
            {foundEntries.length !== 0 ? foundEntries.map((entry) => 
              <ListBlock entry={entry} navigation={navigation} key={entry.id}/>
            ) : suggestions}
          </ScrollView>
        </View>
    );
  }