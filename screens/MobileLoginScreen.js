import React from 'react'
import { Alert, Text, View } from 'react-native'
import { useState } from 'react'
import PhoneInput from 'react-native-phone-number-input'
import { TouchableWithoutFeedback } from 'react-native'
import { Keyboard } from 'react-native'
import Button from '../components/Button'
import loginStyles from '../styles/Login'

/**
 * Login screen where user is asked to register by mobile number
 */
const MobileLoginScreen = ({navigation}) => { 

    const[phonenumber,setphonenumber]  =useState('')
    const[formattedValue,setFormattedValue] =useState('')
  
    const onPressButton=()=>{
        if(phonenumber&&phonenumber.length>9){
            navigation.navigate('Otp',{phonenumber})
        }
        else{
            Alert.alert(
                "Invalid entry",
                "Fill a valid number",
                [{
                    text:'Cancel',
                    style:'cancel'
                }]
            )
        }
        
    }
  
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
          <View style={loginStyles.container}>
            <View style={loginStyles.loginText}>
              <Text style={loginStyles.loginHeading}> Hello there, </Text>
              <Text style={loginStyles.loginHeadingSecondary}>We are glad to see you in City Bubble!  </Text>
            </View>
            <View style={loginStyles.loginInput}>
                <Text style={loginStyles.loginTextInput} >Please provide us your mobile number</Text>
                <PhoneInput
                    defaultValue={phonenumber}
                    defaultCode="IN"
                    onChangeText={(text)=>{setphonenumber(text)}}
                    onChangeFormattedText={(text)=>{setFormattedValue(text)}}
                    withdarkTheme
                    withShadow
                    autofocus
                />
                <Button title="Next" onPress={onPressButton} />
            </View>
          </View>
        </TouchableWithoutFeedback>
    )
}
  
export default MobileLoginScreen
  