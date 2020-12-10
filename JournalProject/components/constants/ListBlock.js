import React, {useState} from 'react';
import {Text} from 'react-native';
import 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '../styles/styles';

export default function ListBlock({entry, navigation, list}) {
    // declare and initialize state
    const [text, setText] = useState('');

    // abbreviate text for entry and title if necessary
    const titleText = entry.title.length > 15 ?
                        entry.title.substring(0, 15) + '...':
                        entry.title;

    const entryText = entry.entry.length > 20 ? 
                        entry.entry.substring(0, 20) + '...':
                        entry.entry;

    // display screen
    return list ? (
        // display entry if specified in settings
        <TouchableOpacity style={styles.listContainer} onPress={() => navigation.navigate('View', {entry: entry})}>
            <Text style={styles.date}>{entry.date}</Text>
            <Text style={styles.title}>{titleText}</Text>
            <Text style={styles.mood}>{entry.mood}</Text>
            <Text style={styles.entry}>{entryText}</Text>
        </TouchableOpacity>
    ) : (
      // display block without entry if specified in settings
      <TouchableOpacity style={styles.listContainer} onPress={() => navigation.navigate('View', {entry: entry})}>
            <Text style={styles.date}>{entry.date}</Text>
            <Text style={styles.title}>{titleText}</Text>
            <Text style={styles.mood}>{entry.mood}</Text>
        </TouchableOpacity>
    );
  }