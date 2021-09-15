import React from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View,ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { Keyboard } from 'react-native'
import Button from '../../components/Button'
import loginStyles from '../../styles/Login'
import {connect} from 'react-redux';
import {checkIfPhoneNumberExistsInFirestore} from '../../redux/actions/RegisterUserActions';
/**
 * Login screen where user is asked to register by mobile number
 */
const MobileLoginScreen = (props) => {

    const[indicator, setIndicator]=useState(false)
    const {navigation , route} = props
    const [phonenumber, setphonenumber] = useState('')
    const [errorExist , setErrorExist] = useState('')
    const submitRegisteredUser = async()=>{
        try{
            if (phonenumber && phonenumber.length > 9) {
                let response = await props.checkIfPhoneNumberExistsInFirestore(phonenumber,route.params.choosecity);
                console.log("Response is"+response)
                if(response === true){
                    setErrorExist('Given Phone does not exist in the database , Please try with another number!')
                } else {
                    navigation.navigate('TabNavigation',{...route.params})
                }
            }  else {
                Alert.alert(
                    "Invalid entry",
                    "Fill a valid number",
                    [{
                        text: 'Cancel',
                        style: 'cancel'
                    }]
                )
            }
            
        } catch(err){
            console.error("Error is"+err);
            Alert.alert(err);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={loginStyles.container}>
                <View style={loginStyles.loginText}>
                    <Text style={loginStyles.loginHeading}> Hello there, </Text>
                    <Text style={loginStyles.loginHeadingSecondary}>We are glad to see you in City Bubble!  </Text>
                </View>
                <View style={loginStyles.loginInput}>
                    <Text style={loginStyles.loginTextInput}>Please provide us your mobile number</Text>
                    <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errorExist ? errorExist : null}</Text>
                    <View style={loginStyles.inputContainer}>
                        <View style={loginStyles.openDialogView}>
                            <Text style={loginStyles.Code}>{"+91"}</Text>
                        </View>
                        <TextInput
                            style={loginStyles.phoneInputStyle}
                            placeholder="Enter 10-digit number"
                            placeholderTextColor= '#fff'
                            keyboardType="number-pad"
                            value={phonenumber}
                            onChangeText={setphonenumber}
                            secureTextEntry={false}/>
                    </View>
                    <ActivityIndicator size ='large' color='green' animating ={indicator}/>
                    <Button title="Login" 
                    onPress={(submitRegisteredUser)}
                    />
                    

                    <View style={loginStyles.RegisterContainer}>
                        <View style={loginStyles.registerQuestion}>
                            <Text style={loginStyles.TextQuestion}>New to the Bubble? </Text>
                            <TouchableOpacity style={loginStyles.RegisterBtn} onPress={()=>navigation.navigate('RegisterScreen')}>
                                <Text style={loginStyles.btnStyles}>Enroll your Business</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const mapDispatchToProps =(dispatch)=>{
    return{
        checkIfPhoneNumberExistsInFirestore:(phonenumber,city) => dispatch(checkIfPhoneNumberExistsInFirestore(phonenumber,city))
    }
}
export default connect(null,mapDispatchToProps)(MobileLoginScreen)
