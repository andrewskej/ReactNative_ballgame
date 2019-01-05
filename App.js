

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StoreProvider} from './Contexts/Store'
import DropZone from './Components/DropZone'
import Timer from './Components/Timer'
import Pointer from './Components/Pointer';

export default class App extends Component {

  //timer 10초부터 다운, 리셋
  //pointer  10초가 지나면 -1, 공 색깔이 맞게 들어가면 +1
  //Target  10초가 지나면 리셋, 공이 들어가면 리셋
  //Ball
  //BallList



  render() {
    return (
      <StoreProvider>
        <View style={styles.container}>
          <DropZone/>
          <Timer/>
          <Pointer/>
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
