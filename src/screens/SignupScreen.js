import React, { Component, useEffect, useState } from 'react'
import { KeyboardAvoidingView, StatusBar, Text, View, Platform } from 'react-native'
import Input from '../components/Input'
import PhoneInput from 'react-native-phone-number-input'

const SignupScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='bg-white flex-1'>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
            <Text className='font-bold text-4xl p-6'>Xin chào! Vui lòng đăng ký để bắt đầu</Text>
            <View className='items-center '>
                <PhoneInput
                    defaultCode='VN'
                    containerStyle={{ borderWidth: 0.5, borderColor: 'gray', backgroundColor: '#fff', height: 50, borderRadius: 7 }}
                    textContainerStyle={{ borderRadius: 7, backgroundColor: '#fff' }}
                    flagButtonStyle={{ backgroundColor: '#f0eeed', borderRadius: 7 }} 
                    placeholder='Số điện thoại'
                    onChangeFormattedText={(text) => setPhoneNumber(text)}
                    value={phoneNumber}
                    />
                <Input placeholder={'Email'} inputStyle={{width: '80%', marginVertical: 20}}/>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignupScreen