import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { Calendar } from '@fullcalendar/core';

import Header from '../constants/Header';
import Menu from '../constants/Menu';

export default function CreateEntry({navigation}) {
    const [showMenu, setShowMenu] = useState(false);
    
    const updateMenu = () => {setShowMenu(!showMenu); console.log(showMenu)};

    const menu = showMenu ? 
          <Menu style={{opacity: 100}} navigation={navigation} updateMenu={updateMenu}/> : 
          <Menu style={{opacity: 0}} navigation={navigation} updateMenu={updateMenu}/>;

    return (
        <View style={styles.container}>
            <Header updateMenu={updateMenu}/>
            {menu}
            <Text>Title:</Text>
            <TextInput style={styles.titleBox}/>
            <Text>Mood:</Text>
            <View style={styles.moodSelection}>
                <Text style={styles.singleMood}>🙁</Text>
                <Text style={styles.singleMood}>😐</Text>
                <Text style={styles.singleMood}>🙂</Text>
            </View>
            {/* <Button
                title="🙁"
            />
            <Button
                title="😐"
            />
            <Button
                title="🙂"
            /> */}
            <Text>Entry:</Text>
            <TextInput style={styles.entryBox} multiline={true}/>
            <Button
                title="List"
                onPress={() => navigation.navigate('List')}
            />
        </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      textAlign: 'left',
    },
    moodSelection: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    singleMood: {
        fontSize: 40,
    },
    titleBox: {
        marginLeft: 10,
        width: '90%',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'black',
    },
    entryBox: {
        marginLeft: 10,
        width: '90%',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'black',

        height: 200,
        textAlign: 'left',
    },
});