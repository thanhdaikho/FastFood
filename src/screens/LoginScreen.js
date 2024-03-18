// Import các thư viện cần thiết
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StatusBar, Text, View, Platform } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import FloatingButton from '../components/FloatingButton';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';
import { app } from '../../firebaseConfig'; // Import `app` từ file firebaseConfig

const LoginScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [appVerifier, setAppVerifier] = useState(null);

    useEffect(() => {
        const auth = getAuth(app);
        const verifier = new RecaptchaVerifier(auth, 'sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
            }
        });

        setAppVerifier(verifier);
    }, []);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='bg-white flex-1'>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
            <Text className='font-bold text-2xl text-center mt-32 mb-2'>Số điện thoại của bạn</Text>
            <Text className='text-gray text-center text-lg mb-14'>Vui lòng cung cấp và xác thực số điện thoại của bạn.</Text>
            <View className='items-center '>
                <PhoneInput
                    defaultCode='VN'
                    containerStyle={{
                        borderWidth: 0.5,
                        backgroundColor: '#fff',
                        height: 50,
                        borderRadius: 7
                    }}
                    textContainerStyle={{ borderRadius: 7, backgroundColor: '#fff' }}
                    flagButtonStyle={{ backgroundColor: '#f0eeed', borderTopLeftRadius: 7, borderBottomLeftRadius: 7 }}
                    placeholder='Số điện thoại'
                    onChangeText={(text) => setPhoneNumber(text)}
                    value={phoneNumber}
                    autoFocus
                />
            </View>
            <FloatingButton buttonStyle={{ position: 'absolute', bottom: 25, right: 20 }} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;
