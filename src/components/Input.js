import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import Icon from '@expo/vector-icons/Feather'
const Input = ({placeholder, value, onChangeText, state, inputStyle}) => {
    return (
        <View style={[{borderWidth: 0.5, borderColor: 'gray', borderRadius: 7, padding: 10}, inputStyle]}>
            <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText}/>
        </View>
    )
}

export default Input
