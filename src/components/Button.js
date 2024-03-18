import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Button = ({ title, onPress }) => {
    return (
        <View className='bg-white h-15'>
            <TouchableOpacity className='p-5  justify-center items-center bg-blue-500 mx-8 rounded-md' onPress={onPress}>
                <Text className='text-center font-bold text-2xl text-white'>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button
