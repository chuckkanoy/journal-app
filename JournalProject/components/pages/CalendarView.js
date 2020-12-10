import React, {useContext} from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import { Calendar } from 'react-native-calendars';
import 'intl';
import 'intl/locale-data/jsonp/en';

import Header from '../constants/Header';
import EntryContext from '../context/context';
import styles from '../styles/styles';

export default function CalendarView({navigation}) {
  // get necessary values from context
    var {entries, datesMarked} = useContext(EntryContext);

    //display screen with header 
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            {/* https://github.com/wix/react-native-calendars */}
            <Calendar
              markingType={'period'}
              markedDates={datesMarked}
              onDayPress={(day) => {
                // handle different conditions on the number of entries for day selected
                switch(getNumOnDay(entries, day)) {
                  case 0: navigation.navigate('Create', {entry: {date: day.dateString}});
                    break;
                  case 1: navigation.navigate('View', {entry: getEntryOnDay(entries, day)});
                    break;
                  default: navigation.navigate('Search', {searchString: day.dateString});
                }
              }}
            />
        </View>
    );
  }

  //get entry if only one appears on the day
  function getEntryOnDay(entries, day) {
    var result = {};
    entries.map((entry) => {
      if(entry.date === day.dateString){
        result = entry;
      }
    });
    return result;
  }

  //get the number of entries for the specified day
  function getNumOnDay(entries, day) {
    var entriesAtDate = 0;
    entries.map((entry) => {
      if(entry.date === day.dateString)
        entriesAtDate++;
    })
    return entriesAtDate;
  }