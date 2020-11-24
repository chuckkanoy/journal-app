import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {IconButton, Colors} from 'react-native-paper';

export default function Header({updateMenu}) {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <IconButton 
              icon="menu"
              onPress={updateMenu}
              size={50}
            />
            <Text style={{
              fontSize: 25,
              textAlignVertical: 'center',  
            }}>Hello!</Text>
            <IconButton icon="microphone"
              size={50}
            />
        </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      justifyContent: 'space-between',
    },
  });