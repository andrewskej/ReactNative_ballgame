import React, { Component } from 'react'
import {Text, View} from 'react-native'
import {StoreConsumer} from '../Contexts/Store'

export default class Pointer extends Component {
  render() {
    return (
        <StoreConsumer>
            {({state,action})=> (
            <View>
                <Text style={{fontSize:20}}>{state.point}</Text>
            </View>
            )}
        </StoreConsumer>

    )
  }
}
