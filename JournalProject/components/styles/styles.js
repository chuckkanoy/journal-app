import {StyleSheet} from 'react-native';

// style sheet for application
const styles = StyleSheet.create({
    // calendar styles
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    // creation styles
    creationContainer: {
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'left',
    },
    creationScroll: {
        marginLeft: 10,
    },
    edit: {
        alignSelf: 'flex-end',
    },
    moodSelection: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    createSingleMood: {
        fontSize: 40,
        borderRadius: 5,
    },
    dateBox: {
        borderWidth: 2,
        borderRadius: 5,
        marginLeft: 10,
        width: '90%',
        paddingLeft: 10
    },
    entryBox: {
        height: 150,
        textAlignVertical: 'top'
    },
    error: {
        color: 'red',
    },
    message: {
        color: 'black',
    },
    // search styles
    search: {
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        fontSize: 20,
    },
    // settings styles
    settingsContainer: {
        flex: 1,
        backgroundColor: '#fff',
        fontSize: 200,
    },
    content: {
        marginLeft: 10,
    },
    individual: {
        flexDirection: 'row',
    },
    // view styles
    container: {
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'left',
    },
    edit: {
        alignSelf: 'flex-end',
    },
    moodSelection: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    singleMood: {
        marginLeft: 10,
        fontSize: 40,
        width: 50,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'black',
    },
    dateBox: {
        borderWidth: 2,
        borderRadius: 2,
        marginLeft: 10,
        width: '90%',
        paddingLeft: 10
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
        padding: 10,
  
        height: 200,
        textAlignVertical: 'top'
    },
    // menu styles
    menuContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1,
        borderWidth: 2,
        flexDirection: 'column',
    },
    menuButton: {
        fontSize: 50,
    },
    listContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 2,
        margin: 5,
        padding: 5,
        justifyContent: 'space-between',
    },
    date: {
        width: '25%'
    },
    title: {
        width: '15%',
    },
    mood: {
        width: '5%'
    },
    entry: {
        width: '30%'
    },
    // header styles
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
  });

export default styles;