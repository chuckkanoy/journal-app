import React, {useContext, useState} from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';

import EntryContext from '../context/context';
import styles from '../styles/styles';

export default function Menu({navigation, style}) {
   // declare and initialize state
    const [text, setText] = useState('');
   
   // get methods necessary from context
    const {closeMenu, updateMarks} = useContext(EntryContext);

    const menuButtonSize = 50;

   // display menu with appropriate icon buttons
    return (
        <View style={[styles.menuContainer, style]}>
             <IconButton icon="backburger" 
                onPress={closeMenu}
                size={menuButtonSize}
              />
              {/* update the calendar marks and close the menu on navigation */}
             <IconButton icon="calendar"
                onPress={() => {
                   navigation.navigate('Calendar'); 
                   closeMenu();
                   updateMarks();
                  }}
                style={styles.menuButton}
                size={menuButtonSize}
             />
             <IconButton icon="view-list"
                onPress={() => {
                   navigation.navigate('List'); 
                   closeMenu();
                   updateMarks();
                  }}
                style={styles.menuButton}
                size={menuButtonSize}
             />
             <IconButton icon="magnify"
                onPress={() => {
                   navigation.navigate('Search', {searchString: ''});
                   closeMenu();
                   updateMarks();
                  }}
                style={styles.menuButton}
                size={menuButtonSize}
             />
             <IconButton icon="plus"
                onPress={() => {
                   navigation.navigate('Create', {entry: null});
                   closeMenu();
                   updateMarks();
                  }}
                style={styles.menuButton}
                size={menuButtonSize}
             />
             <IconButton icon="cogs"
                onPress={() => {
                   navigation.navigate('Settings');
                   closeMenu();
                   updateMarks();
                  }}
                style={styles.menuButton}
                size={menuButtonSize}
             />
        </View>
    );
  }
