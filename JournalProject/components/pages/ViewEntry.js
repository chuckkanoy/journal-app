import React, {useContext} from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';

import Header from '../constants/Header';
import EntryContext from '../context/context';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../styles/styles';

export default function ViewEntry({navigation, route}) {
    // get method necessary from context
    const {deleteEntry} = useContext(EntryContext);

    // get the entry from the parameters passed through the route
    // https://reactnavigation.org/docs/params/
    const {entry} = route.params; 
    // create new entry object from route parameter
    const newEntry = {
            date: entry.date, 
            title: entry.title,
            mood: entry.mood,
            entry: entry.entry,
            id: entry.id,
            };

    // declare and initialize button to pass to header
    const edit = <IconButton style={styles.edit} icon="pencil"
            onPress={() => {navigation.navigate('Create', {entry: newEntry});}}
            size={50}
        />;

    // display screen with header, entry fields populated, and delete button
    return (
        <View style={styles.container}>
            <Header navigation={navigation} edit={edit}/>
            <ScrollView>
            <Text>Date:</Text>
            <Text 
                style={styles.dateBox}
            >
                {entry.date}
            </Text>
            <Text>Title:</Text>
            <Text 
                style={[styles.dateBox, styles.titleBox]}
            >
                {entry.title}
            </Text>
            <Text>Mood:</Text>
            <Text 
                style={styles.singleMood}
            >
                {entry.mood}
            </Text>
            <Text>Entry:</Text>
            <Text 
                style={styles.entryBox}
            >
                {entry.entry}
            </Text>
            <IconButton 
                icon="close-box"
                onPress={() => {
                    deleteEntry(entry);
                    navigation.popToTop();
                }}
                size ={50}
            />
        </ScrollView>
        </View>
    );
  }