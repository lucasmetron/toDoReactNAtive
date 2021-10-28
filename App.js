import React, { useEffect, useState } from 'react';
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

  const [isOpen, setIsOpen] = useState(false)

  function onOpen() {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

  return (
    <SafeAreaView style={styles.container} >
      {isOpen === true ? null :
        <Intro onOpen={onOpen} />
      }

      {
        isOpen === true ?
          <ListItem item={{ itemId: 5, title: 'Acordar' }} />
          :
          null
      }

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
