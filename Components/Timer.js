import React, { Component } from 'react'
import {View, Text} from 'react-native'
import {StoreConsumer} from '../Contexts/Store'

export default class Timer extends Component {

    componentDidMount(){

    }

  

    render() {

        return (
            <StoreConsumer>
                {({state,action})=> (
                <View>
                    <Text style={{fontSize:25}}>{ state.time }</Text>
                </View>
                )}
            </StoreConsumer>
        )
    }
}

