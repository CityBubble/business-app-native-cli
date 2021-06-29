import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native'
import { Card } from 'react-native-shadow-cards'
import InputBox from '../components/Inputbox'
import Registerstyles from '../styles/Register'

import Button from '../components/Button'
const Register = ({ navigation, route }) => {
    const [Bname, setBname] = useState()
    const [Bnature, setBnature] = useState()

    let data = route.params
    let number = data.phonenumber
    // let phonenumber={phonenumber:number}

    return (
        <SafeAreaView style={Registerstyles.registerScreen}>
            <View style={Registerstyles.registerContainer}>

                <View style={Registerstyles.registerLogo} >
                    <Image source={require('../assets/Logo/Logo.png')} />
                </View>
                <View style={Registerstyles.registerTextContainer}>
                    <Text style={Registerstyles.registerText} >Good to see you in the bubble</Text>
                    <Text style={Registerstyles.registerTextSecondary} >Spare some time to let us know more about you</Text>
                </View>
                <KeyboardAvoidingView style={Registerstyles.inputContainer} behavior={"padding"}>

                    <View style={Registerstyles.inputContainerSecondary}>
                        <Text style={Registerstyles.registerLabel}>Business name</Text>
                        <Card style={Registerstyles.Cards}>
                            <View style={Registerstyles.registerTextImage}>
                                <Image source={require(`../assets/Form/Bussiness.png`)} style={Registerstyles.Icon} />
                                <InputBox
                                    Title="Business name"
                                    value={Bname}
                                    onchangeText={(e) => setBname(e.target.value)}
                                />

                            </View>
                        </Card>
                    </View>
                    <View style={Registerstyles.inputContainerSecondary}>
                        <Text style={Registerstyles.registerLabel}>Nature of business</Text>
                        <Card style={Registerstyles.Cards}>
                            <View style={Registerstyles.registerTextImage}>
                                <Image source={require(`../assets/Form/nature.png`)} style={Registerstyles.Icon} />
                                <InputBox
                                    Title="Bakery, Sports, Cosmetics,....."
                                    value={Bnature}
                                    onchangeText={(e) => { setBnature(e.target.value) }}
                                />
                            </View>
                        </Card>
                    </View>
                    <View style={Registerstyles.inputContainerSecondary}>
                        <Text style={Registerstyles.registerLabel}>Primary contact</Text>
                        <Card style={Registerstyles.Cards}>
                            <View style={Registerstyles.registerTextImage}>
                                <Image source={require(`../assets/Form/Phone.png`)} style={Registerstyles.Icon} />
                                <InputBox
                                    Title="Enter 10-digit number"
                                    keybord='numeric'

                                />

                            </View>
                        </Card>
                    </View>
                    <Button title="Next" onPress={() => { navigation.navigate('AddressScreen') }} />
                </KeyboardAvoidingView>
            </View>


        </SafeAreaView>
    )
}

export default Register