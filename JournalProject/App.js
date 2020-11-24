import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalendarView from './components/pages/CalendarView';
import ListScreen from './components/pages/ListScreen';
import CreateEntry from './components/pages/CreateEntry';
import Search from './components/pages/Search';
import Menu from './components/constants/Menu';
import Header from './components/constants/Header';
import Settings from './components/pages/Settings';

const Stack = createStackNavigator();

export default function App() {
  const [text, setText] = useState('');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Calendar"
          component={CalendarView}
        />
        <Stack.Screen
          name="Create"
          component={CreateEntry}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
        />
        <Stack.Screen
          name="Search"
          component={Search}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
        />
        <Stack.Screen
          name="Header"
          component={Header}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
