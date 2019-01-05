import React, { Component } from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {StoreConsumer} from '../Contexts/Store'

export default class DropZone extends Component {
  render() {
    return (
        <StoreConsumer>
            {({state,action})=> (
                <View style={styles.board}>
                    <View style={styles.basket}></View>
                </View>
            )}
        </StoreConsumer>
    )
  }
}

const styles = StyleSheet.create({
    board:{ 
        backgroundColor:'skyblue',
        height:200,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    basket:{
        borderColor:'white',
        height:100,
        width:100,
        borderWidth:1
    }
})