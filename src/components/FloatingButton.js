import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Feather'
const FloatingButton = ({onPress, buttonStyle}) => {
    return (
        <TouchableOpacity style={[{backgroundColor: '#4299e1', width: 55, height: 55, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}, buttonStyle]}>
            <Icon name='arrow-right' size={25} color={'#fff'}/>
        </TouchableOpacity>
    )
}

export default FloatingButton