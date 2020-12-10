import React, {useContext, useState} from 'react';
import { View, Keyboard } from 'react-native';
import 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';

import EntryContext from '../context/context';
import Menu from './Menu';
import styles from '../styles/styles';

export default function Header({navigation, edit}) {
    // declare and initialize state
    const [text, setText] = useState('');

    // get necessary methods from context
    const {showMenu, openMenu, closeMenu} = useContext(EntryContext);

    // display menu if appropriate
    const menu = showMenu ? 
          <Menu navigation={navigation} updateMenu={closeMenu}/> : 
          <></>;

    // display header component
    return (
      <>
        <View style={styles.headerContainer}>
            <IconButton 
              icon="menu"
              onPress={() => {
                openMenu();
                Keyboard.dismiss();
              }}
              size={50}
            />
            {/* display edit prop if it's been passed */}
            {edit}
        </View>
        {menu}
      </>
    );
  }