/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Home from './Screens/Home/Home';
import { SortingContextProvider } from './Context/sortContext';
// import Navbar from './Components/Navbar/Navbar';

function App(): JSX.Element {
  return (
    <SortingContextProvider>
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </SortingContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
});

export default App;
