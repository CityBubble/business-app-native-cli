import React, { useState, useEffect, useRef } from 'react'
import { TouchableOpacity } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import otpStyles from '../styles/Otp'

const Otp = ({ route, navigation }) => {

    let textInput = useRef(null)
    let clockCall = null
    const lengthInput = 6;
    const defaultCountdown = 30;
    const Otp = '123456';
    const [OtpVal, setOtpVal] = useState('')
    const [countdown, setcountdown] = useState(defaultCountdown)
    const [enableResend, setEnableResend] = useState(false)
    const [wrongOtp, setWrongotp] = useState(false)

    let data = route.params
    let number = data.phonenumber
    let phonenumber = { phonenumber: number }
    const onChangeText = (val) => {
        setOtpVal(val)
        // setOtpVal((OtpVal) => val);
        if (val.length === lengthInput && val === Otp) {
            navigation.replace('RegisterScreen', { phonenumber })

        }
        else if (val.length === lengthInput && val !== Otp) {
            setWrongotp(true)

        }
    }

    const TextCondition = () => {
        if (wrongOtp === false) {
            return (
                <View>
                    <Text style={otpStyles.otpHeading}>Enter the OTP</Text>
                    <View>
                        <Text style={otpStyles.otpText}>{`Please check for the OTP received on your number `}</Text>
                        <Text style={otpStyles.textNumber}>{number}</Text>
                    </View>
                </View>
            )
        }

        else {
            return (
                <View >
                    <Text style={otpStyles.otpHeading}>Oops !! It's an invalid OTP!</Text>
                    <Icon name="exclamation-triangle" size={56} color="#FD003A" style={otpStyles.icons} />
                </View>
            )

        }
    }

    useEffect(() => {
        textInput.focus()
    }, [])

    useEffect(() => {
        clockCall = setInterval(() => {
            decrementClock();
        }, 1000)
        return () => {
            clearInterval(clockCall)
        }
    })

    const decrementClock = () => {
        if (countdown === 0) {
            setEnableResend(true)
            setcountdown(0)
            clearInterval()
        } else {

            setcountdown(countdown - 1)
        }
    }
    const onResendOTP = () => {
        if (enableResend) {
            setcountdown(defaultCountdown)
            setEnableResend(false)
            clearInterval(clockCall)
            clockCall = setInterval(() => {
                decrementClock()
            }, 1000)
        }
    }

    return (
        <View style={otpStyles.container}>
            <TouchableOpacity style={otpStyles.otpBack} onPress={() => { navigation.navigate('Login') }} >
                <Image source={require('../assets/Image/back.png')} />
            </TouchableOpacity>
            <KeyboardAvoidingView keyboardVerticalOffset={50} behavior={'padding'} style={otpStyles.otpStyle}>
                {TextCondition()}
                <View style={otpStyles.textInput}>
                    <TextInput
                        ref={(input) => textInput = input}
                        onChangeText={onChangeText}
                        style={{ width: 0, height: 0 }}
                        value={OtpVal}
                        maxLength={lengthInput}
                        keyboardType="phone-pad"

                    />

                    <View style={otpStyles.containerInput}>
                        {Array(lengthInput).fill().map((data, index) => (
                            <View style={wrongOtp ? otpStyles.cellViewWrongOtp : otpStyles.cellView} key={index}>
                                <Text style={otpStyles.cellText}
                                    onPress={() => textInput.focus()}
                                >{OtpVal && OtpVal.length > 0 ? OtpVal[index] : ''}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={otpStyles.butt} >
                        <Text style={otpStyles.OtpTextChange}> Didn't recevie OTP?</Text>
                        <TouchableOpacity onPress={onResendOTP} >
                            <Text style={{ color: enableResend ? '#A5A5A5' : '#4852ff', textAlign: 'center' }} >Resend OTP({countdown})</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Otp