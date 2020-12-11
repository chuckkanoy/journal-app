import React, {useContext, useEffect, useState} from 'react';
import { Text, TextInput, View } from 'react-native';
import 'react-native-gesture-handler';
import {Calendar} from 'react-native-calendars';
import {IconButton, Colors} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../constants/Header';
import EntryContext from '../context/context';
import styles from '../styles/styles';

export default function CreateEntry({navigation, route}) {
    // declare and initialize constants
    const titleLimit = 20, entryLimit = 250;

    // declare and initialize state
    const [showCalendar, setShowCalendar] = useState(false);

    const [errors, setErrors] = useState({});
    const [messages, setMessages] = useState({});
    
    const [frownHighlight, setFrownHighlight] = useState({});
    const [mehHighlight, setMehHighlight] = useState({});
    const [happyHighlight, setHappyHighlight] = useState({});

    const [newDate, setNewDate] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newMood, setNewMood] = useState('');
    const [newEntry, setNewEntry] = useState('');

    // get the values and methods necessary from context
    var {addEntry, updateEntry, closeMenu,
        updateMarks, entrySelected
    } = useContext(EntryContext);

    //update entry fields if entry parameter is passed with route
    // https://reactnavigation.org/docs/params/ 
    const {entry} = route.params; 
    useEffect(() => {
        if(entry) {
            setNewDate(entry.date);
            setNewTitle(entry.title);
            updateMood(entry.mood);
            setNewEntry(entry.entry);
        }
    }, []);
    const updateCalendar = () => {setShowCalendar(!showCalendar)};
    
    // check whether the title is empty or beyond the limit 
    const checkTitleLimit = (text) => {
        var limitReached = false;
        const titleDifference = titleLimit - text.length;
        if(titleDifference === titleLimit) {
            errors.title = "An title is required";
            limitReached = true; 
        }
        else if(titleDifference >= 0) {
            errors.title = null;
            messages.title = titleDifference + " characters remaining";
        }
        else {
            errors.title = "Title limit exceeded by " + (-titleDifference);
            limitReached = true;
        }
        return limitReached;
    }

    // check whether the entry is empty or beyond the limit
    const checkEntryLimit = (text) => {
        var limitReached = false;
        const entryDifference = entryLimit - text.length;

        if(entryDifference === entryLimit) {
            errors.entry = "An entry is required";
            limitReached = true;
        } else if(entryDifference >= 0) {
            errors.entry = null;
            messages.entry = entryDifference + " characters remaining";
        }
        else {
            errors.entry = "Entry limit exceeded by " + (-entryDifference);
            limitReached = true;
        }

        return limitReached;
    }

    // validate each field, returning true if one or more fields are invalid
    const checkErrors = () => {
        var errorHit = false;
        if(!newDate) {
            errors.date = "A date is required";
            errorHit = true;
        } else if(!newDate.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) {
            errors.date = "Date must be in the following format: YYYY-MM-DD";
            errorHit = true;
        } else 
            errors.date = null;
        if(!newTitle) {
            errors.title = "A title is required";
            errorHit = true;
        } else if(checkTitleLimit(newTitle)) {
            errorHit = true;
        } else
            errors.title = null;
        if(!newMood) {
            errors.mood = "A mood is required";
            errorHit = true;
        } else
            errors.mood = null;
        if(!newEntry) {
            errors.entry = "A entry is required";
            errorHit = true;
        } else if(checkEntryLimit(newEntry)) {
            errorHit = true;
        } else
            errors.entry = null;
        
        return (errorHit);
    }

    // display calendar if date is selected
    const calendar = showCalendar ?
            // https://github.com/wix/react-native-calendars
            <Calendar
                markedDates={{
                    [newDate]: {marked:true, selectedColor: 'skyblue'}
                }}
                onDayPress={(day) => {
                    setNewDate(day.dateString);
                    checkErrors();
                }}
            /> :
            <></>;

    // clear the outlines of moods
    const clearHighlights = () => {
        setFrownHighlight({});
        setMehHighlight({});
        setHappyHighlight({});
    }

    // update the mood with border on press
    const updateMood = (emoji) => {
        setNewMood(emoji);
        clearHighlights();
        switch(emoji) {
            case '🙁': setFrownHighlight({borderWidth: 2});
                break;
            case '😐': setMehHighlight({borderWidth: 2});
                break;
            case '🙂': setHappyHighlight({borderWidth: 2});
                break;
        }
    }

    // clear the new fields
    const clearFields = () => {
        setNewDate('');
        setNewTitle('');
        setNewMood('');
        setNewEntry('');
    }

    //component to easily identify required fields
    const requiredIndicator = <Text style={{color: 'red'}}>*</Text>;

    // declare edit constant to pass as prop to header
    const edit = <IconButton style={styles.edit} icon="pencil"
        onPress={() => {
            if(!checkErrors()) {
                if(!entry || !entry.mood) {
                    addEntry({date: newDate, title: newTitle, mood: newMood, entry: newEntry});
                }
                else {
                    updateEntry({date: newDate, title: newTitle, mood: newMood, entry: newEntry, id: entry.id});
                }
                updateMarks();
                closeMenu();
                clearFields();
                navigation.popToTop();
            }
        }}
    size={50}
 />;

    // display screen with header and fields
    return (
            <View style={styles.creationContainer}>
            <Header navigation={navigation} edit={edit}/>
            <ScrollView style={styles.creationScroll}>
            {entrySelected ? (<>
                <Text>Date (YYYY-MM-DD):{requiredIndicator} </Text>
                <Text style={styles.error}>{errors.date}</Text>
                <TextInput
                    style={styles.dateBox}
                    onChangeText={(text) => {
                        setNewDate(text);
                    }}
                />
            </>) : (<><Text>Date:{requiredIndicator}</Text>
            <Text style={styles.error}>{errors.date}</Text>
            <Text 
                style={styles.dateBox}
                // open the calendar if the date box is 
                // selected and manual date is set in settings
                onPress={updateCalendar}
            >
                {newDate}
            </Text>
            {calendar}</>)}
            <Text>Title:{requiredIndicator}</Text>
            {/* show either error or characters used message as necessary */}
            {errors.title !== null ? 
                (<Text style={styles.error}>{errors.title}</Text>) :
                (<Text style={styles.message}>{messages.title}</Text>)
            }
            <TextInput 
                style={[styles.dateBox, styles.titleBox]}
                onChangeText={(text) => {
                    setNewTitle(text);
                    checkTitleLimit(text);
                }}    
                value={newTitle}
            />
            <Text>Mood:{requiredIndicator}</Text>
            <Text style={styles.error}>{errors.mood}</Text>
            <View style={styles.moodSelection}>
                {/* update the highlight of a moood if pressed */}
                <Text 
                    style={[styles.createSingleMood, frownHighlight]}
                    onPress={() => {
                        updateMood('🙁')
                    }}
                >
                    🙁
                </Text>
                <Text 
                    style={[styles.createSingleMood, mehHighlight]}
                    onPress={() => {
                        updateMood('😐')
                    }}
                >
                    😐
                </Text>
                <Text 
                    style={[styles.createSingleMood, happyHighlight]}
                    onPress={() => {
                        updateMood('🙂')
                    }}
                >
                    🙂
                </Text>
            </View>
            <Text>Entry:{requiredIndicator}</Text>
            {/* show either error or characters used message as needed */}
            {errors.entry !== null ? 
                (<Text style={styles.error}>{errors.entry}</Text>) :
                (<Text style={styles.message}>{messages.entry}</Text>)
            }
            <TextInput 
                style={[styles.dateBox, styles.entryBox]} 
                multiline={true}
                onChangeText={(text) => {
                    setNewEntry(text);
                    checkEntryLimit(text);
                }}
                value={newEntry}
            />
        </ScrollView>
        </View>
    );
  }
