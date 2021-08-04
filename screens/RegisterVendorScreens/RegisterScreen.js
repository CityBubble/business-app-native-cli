import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import {  Text, View, Image, KeyboardAvoidingView , TextInput , TouchableOpacity } from 'react-native'
import Picker from 'react-native-picker'
import { Card } from 'react-native-shadow-cards'
import InputBox from '../components/Inputbox'
import Registerstyles from '../styles/Register'
import { Dropdown, MultiSelect } from 'react-native-element-dropdown'
import Button from '../components/Button'
import styles from '../styles/componentStyles/InputBox'
import { Formik } from 'formik'
import * as yup from 'yup';
import {connect} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import {addorUpdateVendorMobileNumber} from '../redux/actions/StorageActions';

const data = [
    { label: 'Fashion', value: '1' },
    { label: 'Food', value: '2' },
    { label: 'Electronics', value: '3' },
    { label: 'Health', value: '4' }
]


const Register = (props) => {
    const {navigation , route} = props
    const [enableshift , setenableshift] = useState(false)
    DropDownPicker.setTheme("DARK");
    DropDownPicker.setListMode("SCROLLVIEW");
    const [openBusinessCategory, setOpenBusinessCategory] = useState(false);
    const [BusinessCategory, setbusinessCategory] = useState(null);
    const [openBusinessSubCategory, setOpenBusinessSubCategory] = useState(false);
    const [BusinessSubCategory, setbusinessSubCategory] = useState([]);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'},
        {label: 'Apple1', value: 'apple1'},
        {label: 'Banana1', value: 'banana2'},
        {label: 'Apple2', value: 'apple3'},
        {label: 'Banana2', value: 'banana4'},
        {label: 'Apple3', value: 'apple5'},
        {label: 'Banana3', value: 'banana6'}
    ]);

    const [items1, setItems1] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'},
        {label: 'Apple1', value: 'apple1'},
        {label: 'Banana1', value: 'banana2'},
        {label: 'Apple2', value: 'apple3'},
        {label: 'Banana2', value: 'banana4'},
        {label: 'Apple3', value: 'apple5'},
        {label: 'Banana3', value: 'banana6'}
    ]);

    return (
        <KeyboardAvoidingView
                behavior={"position"}
                style={Registerstyles.registerScreen}
                enabled={enableshift}>
                    
                    <SafeAreaView>
                            <View style={Registerstyles.registerContainer}>
                            <View style={Registerstyles.registerLogo} >
                                <Image source={require('../assets/Logo/Logo.png')} />
                            </View>
                            <View style={Registerstyles.registerTextContainer}>
                                <Text style={Registerstyles.registerText} >Good to see you in the bubble</Text>
                                <Text style={Registerstyles.registerTextSecondary} >Spare some time to let us know more about you</Text>
                            </View>
                            <Formik 
                                initialValues = {{
                                    BusinessName : ''
                                }}
                                onSubmit = {values => navigation.navigate('AddressScreen',{...values , BusinessCategory , BusinessSubCategory})}
                                validate = { values => {
                                    const errors = {}
                                    if(values.BusinessName === 'MyName'){
                                        errors.BusinessName = 'Invalid Business Name';
                                    }
                                    return errors;
                                }}
                                validationSchema={yup.object().shape({
                                    BusinessName: yup
                                    .string()
                                    .required('Please, provide your Business Name!')
                                })}>
                                {({values,handleChange , errors, setFieldTouched , touched , isValid , handleSubmit}) =>(
                                    <View>
                                        <View style={Registerstyles.inputContainerSecondary}>
                                            <Text style={Registerstyles.registerLabel}>Business name</Text>
                                                {touched.BusinessName && errors.BusinessName &&
                                                            <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.BusinessName}</Text>
                                                }
                                            <Card style={Registerstyles.Cards}>
                                                <View style={Registerstyles.registerTextImage} >
                                                    <Image source={require(`../assets/Form/Bussiness.png`)} style={Registerstyles.Icon} />
                                                    <View style={styles.inputboxContainer}>
                                                        <TextInput
                                                            placeholder="Business Name"
                                                            style={styles.Input}
                                                            placeholderTextColor="#A5A5A5"
                                                            value={values.BusinessName}
                                                            onChangeText={handleChange('BusinessName')}
                                                            onBlur = {() =>setFieldTouched('BusinessName')}
                                                            onFocus = {()=> setenableshift(false)}
                                                        />
                                                    </View>
                                                </View>
                                            </Card>
                                        </View>

                                        <View style={Registerstyles.inputContainerSecondary}>
                                            <Text style={Registerstyles.registerLabel}>Nature of business</Text>
                                            <View style={Registerstyles.registerTextImage}>
                                                <DropDownPicker
                                                    open={openBusinessCategory}
                                                    value={BusinessCategory}
                                                    items={items}
                                                    setOpen={setOpenBusinessCategory}
                                                    containerStyle={{height: 40, marginTop: 10, width : 350 , marginRight : 40}}
                                                    setValue={setbusinessCategory}
                                                    setItems={setItems}
                                                    dropDownDirection="Bottom"
                                                    placeholder='Select your Business Category'
                                                    onFocus = {()=>setenableshift(true)}
                                                />
                                            </View>
                                        </View>

                                        <View style={Registerstyles.inputContainerSecondary}>
                                            <Text style={Registerstyles.registerLabel}>Business SubCategory</Text>
                                            <View style={Registerstyles.registerTextImage}>
                                                <DropDownPicker
                                                    multiple = {true}
                                                    open={openBusinessSubCategory}
                                                    value={BusinessSubCategory}
                                                    items={items1}
                                                    containerStyle={{height: 40, marginTop: 10, width : 350 , marginRight : 40}}
                                                    setOpen={setOpenBusinessSubCategory}
                                                    setValue={setbusinessSubCategory}
                                                    setItems={setItems1}
                                                    dropDownDirection="Bottom"
                                                    placeholder='Select Business SubCategories'
                                                />
                                            </View>
                                        </View>
                                        <Button 
                                                title="Next"
                                                onPress={handleSubmit} 
                                        />
                                    </View>
                                    )}
                            </Formik>
            </View>
        </SafeAreaView>

                </KeyboardAvoidingView>
    )
}

export default Register