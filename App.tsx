/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.textStyle}>
          This is my first React Native app!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Centers the content vertically
    alignItems: 'center',       // Centers the content horizontally
    backgroundColor: '#f8f8f8', // Light background color for the app
  },
  viewContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,               // Shadow for Android devices
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default App;


// POINTS TO REMEMBER:

// -> ALMOST SIMILAR TO REACTJS 
// -> JUST DO CHATGPT IF ANY ERROR 
// -> FlatList
// -> SectionList 
// -> JAVASKRIPT USED AS SAME AS IN REACTJS 
// -> CONSTUCTOR IS ALSO EXACTLY SAME 