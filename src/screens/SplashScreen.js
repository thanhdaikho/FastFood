import React, { Component } from 'react'
import { Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';



const SplashScreen = ({navigation}) => {

    return (
        <SafeAreaView className='flex-1 bg-white'>
            <StatusBar backgroundColor='#fff' barStyle={'dark-content'} />
            <View className='bg-white flex-1'>
                <Image source={require('../assets/images/splash.png')} style={{ width: '100%', height: '66%' }} resizeMode='contain' />
                <Image source={require('../assets/images/tasty.png')} style={{ width: '100%', height: '30%', marginBottom: '5%' }} resizeMode='contain' />
            </View>
            <View className='my-7 bg-white'>
                <Button title='GET STARTED' onPress={() => navigation.navigate('LoginScreen')}/>
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen 