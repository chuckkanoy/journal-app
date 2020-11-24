import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import Header from '../constants/Header';
import Menu from '../constants/Menu';

export default function ListScreen({navigation}) {
  const [showMenu, setShowMenu] = useState(false);
    
  const updateMenu = () => {setShowMenu(!showMenu); console.log(showMenu)};

  const menu = showMenu ? 
        <Menu style={{opacity: 100}} navigation={navigation} updateMenu={updateMenu}/> : 
        <Menu style={{opacity: 0}} navigation={navigation} updateMenu={updateMenu}/>;

  return (
      <View style={styles.container}>
          <Header updateMenu={updateMenu}/>
          {menu}
        <Text>List View</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});