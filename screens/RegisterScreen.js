import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native'
import { Card } from 'react-native-shadow-cards'
import InputBox from '../components/Inputbox'
import Registerstyles from '../styles/Register'
import { Dropdown, MultiSelect } from 'react-native-element-dropdown'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Button from '../components/Button'
import styles from '../styles/componentStyles/InputBox'

const data = [
    { label: 'Fashion', value: '1' },
    { label: 'Food', value: '2' },
    { label: 'Electronics', value: '3' },
    { label: 'Health', value: '4' }
]


const Register = ({ navigation, route }) => {
    const [Bname, setBname] = useState()
    const [Bnature, setBnature] = useState()
    const [dropdown, setDropdown] = useState(null)
    const [MultiDropdown, setMutiDropdown] = useState(null)
    const [selected, setSelected] = useState([])

    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        )
    }

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
                                
                                <Dropdown
                                    style={styles.dropdown}
                                    containerStyle={styles.shadow}
                                    data={data}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Select Business"
                                    placeholderStyle={styles.placeholderStyle}
                                    value={dropdown}
                                    onChange={item => {
                                        setDropdown(item.value);
                                        console.log('selected', item);
                                    }}
                                  
                                    renderItem={item => _renderItem(item)}
                                    textError="Error"
                                    selectedTextStyle={styles.selectedText}
                                />
                               
                            </View>
                        </Card>
                    </View>
                    <View style={Registerstyles.inputContainerSecondary}>
                        <Text style={Registerstyles.registerLabel}>Categories</Text>
                        <Card style={Registerstyles.Cards}>
                            <View style={Registerstyles.registerTextImage}>
                            
                               <MultiSelect
                               
                               style={styles.dropdown}
                               containerStyle={styles.shadow}
                               data={data}
                               labelField="label"
                               valueField="value"
                               placeholder="Select categories"
                               placeholderStyle={styles.placeholderStyle}
                               value={MultiDropdown}
                               onChange={item => {
                                setMutiDropdown(item.value);
                                   console.log('selected', item);
                               }}
                             
                               renderItem={item => _renderItem(item)}
                               textError="Error"
                               selectedTextStyle={styles.selectedText}
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