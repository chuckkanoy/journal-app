import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import CalendarView from './components/pages/CalendarView';
import ListScreen from './components/pages/ListScreen';
import CreateEntry from './components/pages/CreateEntry';
import Search from './components/pages/Search';
import Menu from './components/constants/Menu';
import Header from './components/constants/Header';
import Settings from './components/pages/Settings';
import EntryContext from './components/context/context';
import ViewEntry from './components/pages/ViewEntry';
import ListBlock from './components/constants/ListBlock';

const Stack = createStackNavigator();

export default function App() {
  //declare and instantiate state hooks
  const [text, setText] = useState('');

  //test entries here
  const [entries, setEntries] = useState([{
    id: 0,
    date: "2020-12-08",
    title: "test1",
    mood: "🙂",
    entry: "this is a test entry"
},
{
    id: 1,
    date: "2020-12-09",
    title: "test1",
    mood: "🙂",
    entry: "this is a test entry"
},
{
    id: 2,
    date: "2020-12-10",
    title: "test1",
    mood: "🙂",
    entry: "this is a test entry"
},]);
  const [showMenu, setShowMenu] = useState(false);
  const [calendarSelected, setCalendarSelected] = useState(false);
  const [listSelected, setListSelected] = useState(false);
  const [entrySelected, setEntrySelected] = useState(false);
  const [id, setId] = useState(entries.length);
  const [datesMarked, setDatesMarked] = useState({});

  // function to change the calendar displaying mood color option
  function updateCalendarSelected() {
    setCalendarSelected(!calendarSelected);
  }

  // function to update the marks according to mood color selections
  // in settings
  function updateMarks() {
    var newDatesMarked = {};

      entries.map((entry) => {
        var background = 'red';
        switch(entry.mood) {
          case '🙂': background = 'lime';
            break;
          case '😐': background = 'gold';
            break;
          case '🙁': background = 'firebrick';
            break;
        }
        calendarSelected ? 
        newDatesMarked = {...newDatesMarked, [entry.date]: {color: background}} :
        newDatesMarked = {...newDatesMarked, [entry.date]: {marked: true, dotColor: 'skyblue'}}
      });

      setDatesMarked(newDatesMarked);
  }

  //update id and add entry to context array
  function addEntry(entry) {
    setId(id + 1);
    setEntries([...entries, {...entry, id: id}]);
  }

  //update entry in context array
  function updateEntry(entry) {
    for(var i = 0; i < entries.length; i++) {
      if(entries[i].id === entry.id) {
        entries[i].date = entry.date;
        entries[i].title = entry.title;
        entries[i].mood = entry.mood;
        entries[i].entry = entry.entry;
        setEntries(entries);
        return;
      }
    }
  }

  // remove entry from context array
  function deleteEntry(entry) {
    for(var i = 0; i < entries.length; i++) {
      if(entries[i].id === entry.id) {
        entries.splice(i, 1);
      }
    }
  }

  // functions for opening and closing the pop-up menu as needed
  const closeMenu = () => {setShowMenu(false)}
  const openMenu = () => {setShowMenu(true)}

  return (
    //declare context and pass props
    <EntryContext.Provider value={{entries, addEntry, updateEntry, deleteEntry,
      showMenu, closeMenu, openMenu,
      calendarSelected, updateCalendarSelected, listSelected, setListSelected,
      entrySelected, setEntrySelected, datesMarked, updateMarks}}>
      {/* declare navigation and appropriate routes */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerLeft: null
        }}>
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
            name="ListBlock"
            component={ListBlock}
          />
          <Stack.Screen
            name="View"
            component={ViewEntry}
            params={{entry: null}}
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
    </EntryContext.Provider>
  );
}
