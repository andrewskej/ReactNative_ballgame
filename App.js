

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StoreProvider} from './Contexts/Store'
import DropZone from './Components/DropZone'
import Timer from './Components/Timer'
import Pointer from './Components/Pointer';
import Ball from './Components/Ball';
export default class App extends Component {

  //   Rule
  //over if score < 0
  //wins if score === certain point I set
  //Ball has moving & bouncing speed, and it gets faster for every score you make

  //   Components
  //timer : countDown from 10 sec, resets once 0
  //pointer : -1 every 10sec, if the right ball dragged, +1 instead
  //Target : resets every 10 sec or right ball dragged in

  //Ball : spawns every 10 sec, regardless of action
  //BallList : contains ball



  render() {
    return (
      <StoreProvider>
        <View style={styles.container}>
          <DropZone/>
          <Timer/>
          <Pointer/>
          <Ball/>
        </View>
      </StoreProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
