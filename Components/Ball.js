import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {StoreConsumer} from '../Contexts/Store'

export default class Ball extends Component {
  render() {
    return (
        <StoreConsumer>
            {({state, action})=> (
                state.balls.map( ball =>
                <View style={{backgroundColor:ball, width:100, height:100, borderRadius:100}}></View>
                )
            )}
        </StoreConsumer>
    )
  }
}
