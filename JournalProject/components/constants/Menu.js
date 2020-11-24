import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {IconButton, Colors} from 'react-native-paper';

export default function Menu({navigation, style, updateMenu}) {
    const [text, setText] = useState('');
    return (
        <View style={[styles.container, style]}>
             <IconButton icon="backburger" 
                onPress={updateMenu}
                size={50}
              />
             <IconButton icon="view-list"
                onPress={() => {navigation.navigate('List'); updateMenu();}}
                size={50}
             />
             <IconButton icon="calendar"
                onPress={() => {navigation.navigate('Calendar'); updateMenu();}}
                size={50}
             />
             <IconButton icon="magnify"
                onPress={() => {navigation.navigate('Search'); updateMenu();}}
                size={50}
             />
             <IconButton icon="plus"
                onPress={() => {navigation.navigate('Create'); updateMenu()}}
                size={50}
             />
             <IconButton icon="cogs"
                onPress={() => {navigation.navigate('Settings'); updateMenu()}}
                size={50}
             />
        </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    opacity: 0,
  },
});