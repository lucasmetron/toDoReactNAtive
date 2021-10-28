import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Intro from './components/Intro';
import ListItem from './components/ListItem';


const App = () => {

  return (
    <SafeAreaView style={styles.container} >
      <Intro />
      <ListItem item={{ itemId: 5, title: 'Acordar' }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
