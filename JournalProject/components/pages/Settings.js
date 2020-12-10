import React, {useContext} from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/en';

import Header from '../constants/Header';
import { Checkbox } from 'react-native-paper';
import EntryContext from '../context/context';
import styles from '../styles/styles';

export default function Settings({navigation}) {
    // get values and methods as necessary from 
    const {calendarSelected, updateCalendarSelected,
      listSelected, setListSelected,
      entrySelected, setEntrySelected,
      updateMarks} = useContext(EntryContext);

    // declare constant for the color of the checkboxes
    const checkColor = 'skyblue';

    // display screen with header and different settings options
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <View style={styles.content}>
            <Text>Calendar</Text>
            <View style={styles.individual}>
              <Checkbox
                status={calendarSelected ? 'checked' : "unchecked"}
                // update the marks on the calendar when checked
                onPress={() => {
                  updateMarks();
                  updateCalendarSelected();
                }}
                color={checkColor}
              />
              <Text>Show mood color on calendar view</Text>
            </View>
            <Text>List</Text>
            <View style={styles.individual}>
              <Checkbox
                status={listSelected ? 'checked' : "unchecked"}
                onPress={() => {
                  setListSelected(!listSelected);
                }}
                color={checkColor}
              />
              <Text>Show section of body in list</Text>
            </View>
            <Text>Entry</Text>
            <View style={styles.individual}>
              <Checkbox
                status={entrySelected ? 'checked' : "unchecked"}
                onPress={() => {
                  setEntrySelected(!entrySelected);
                }}
                color={checkColor}
              />
              <Text>Manual date entry/editing</Text>
            </View>
            </View>
        </View>
    );
  }