import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import 'intl';
import 'intl/locale-data/jsonp/en';

import Header from '../constants/Header';
import Menu from '../constants/Menu';

export default function CalendarView({navigation}) {
    const [showMenu, setShowMenu] = useState(false);
    
    const updateMenu = () => {setShowMenu(!showMenu)};

    const menu = showMenu ? 
          <Menu style={{opacity: 100}} navigation={navigation} updateMenu={updateMenu}/> : 
          <Menu style={{opacity: 0}} navigation={navigation} updateMenu={updateMenu}/>;

    return (
        <View style={styles.container}>
            <Header updateMenu={updateMenu}/>
            {menu}
            <Calendar
              markedDates={{
                '2020-11-26': {marked:true, selectedColor: 'orange'}
              }}
              onDayPress={(day) => {navigation.navigate('Create')}}
            />
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });