import React , {useState} from 'react'
import { SafeAreaView } from 'react-native'
import { Text, View, Image , TextInput, KeyboardAvoidingView } from 'react-native'
import { Card } from 'react-native-shadow-cards'
import { Formik } from 'formik'
import * as yup from 'yup';
import registerAddressStyles from '../../styles/RegisterAddress'
import Button from '../../components/Button'
import styles from '../../styles/RegisterAddress'
import InputBoxStyles from '../../styles/componentStyles/InputBox'
import {connect} from 'react-redux';
import { checkIfPhoneNumberExistsInFirestore} from '../../redux/actions/RegisterUserActions';


const RegisterAddressScreen = (props) => {

      const {navigation , route } = props;
      const [enableshift , setenableshift] = useState(false)
      const [errorExist , setErrorExist] = useState('')
      const checkIfExists = async(values) =>{
            try{
                  let response = await props.checkIfPhoneNumberExistsInFirestore(values.PhoneNumber);
                  console.log("Response is"+response)
                  if(response === false){
                        setErrorExist('Given Phone Exists in the database , please try with another number!')
                  } else {
                        navigation.navigate('ProofScreen',{...route.params , ...values})
                  }
            } catch(error){
                  console.log("Error is"+error);
            }
      }
      return (
            <KeyboardAvoidingView
                  behavior={"position"}
                  style={registerAddressStyles.registerScreen}
                  enabled={enableshift}>
                   <SafeAreaView>
                   <Formik
                        initialValues = {{
                              PhoneNumber : '',  
                              AreaName : '',
                              PinCode : '',
                              FullAddress : ''
                        }}
                        onSubmit = {values => checkIfExists(values)}
                        validate = { values => {
                              const errors = {}
                              setErrorExist(null)
                              if(!(values.PhoneNumber.length === 10) && (values.PhoneNumber.length > 1)){
                                    errors.PhoneNumber = 'Phone Number Should only be of ten digits';
                              } else if (values.PhoneNumber.length === 0){
                                    errors.PhoneNumber = 'Please , provide your PhoneNumber!'
                              }
                              return errors;
                        }}
                        validationSchema={yup.object().shape({
                              AreaName: yup
                                  .string()
                                  .required('Please, provide your Area Name!'),
                              PinCode: yup
                                  .string()
                                  .required('Please, provide your PinCode!'),
                              FullAddress : yup
                                    .string()
                                    .required('Please provide full address of your Business!')
                        })}
                  > 

                        {({values,handleChange , errors, setFieldTouched , touched , isValid , handleSubmit}) =>(
                              <View>
                                    <View style={registerAddressStyles.inputContainerInput}>
                                          <Text style={registerAddressStyles.registerLabel}> Primary number</Text>
                                          {touched.PhoneNumber && errors.PhoneNumber &&
                                                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.PhoneNumber}</Text>
                                          }
                                          <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errorExist ? errorExist : null}</Text>
                                          <Card style={registerAddressStyles.Cards}>
                                                <View style={registerAddressStyles.registerTextImage}>
                                                      <Image source={require(`../assets/Form/Phone.png`)} style={styles.Icon} />
                                                      <View style={InputBoxStyles.inputboxContainer}>
                                                      <TextInput
                                                            placeholder={"Phone Number"}
                                                            style={InputBoxStyles.Input}
                                                            placeholderTextColor="#A5A5A5"
                                                            keyboardType="numeric"
                                                            value={values.PhoneNumber}
                                                            onChangeText={handleChange('PhoneNumber')}
                                                            onBlur = {() =>setFieldTouched('PhoneNumber')}
                                                            onFocus = {()=> setenableshift(false)}
                                                      />
                                                      </View>
                                                </View>
                                          </Card>
                                    </View>

                                    <View style={registerAddressStyles.inputContainerInput}>
                                          <Text style={registerAddressStyles.registerLabel}> Area</Text>
                                          {touched.AreaName && errors.AreaName &&
                                                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.AreaName}</Text>
                                          }
                                          <Card style={registerAddressStyles.Cards}>
                                                <View style={registerAddressStyles.registerTextImage}>
                                                      <Image source={require(`../assets/Form/Area.png`)} style={styles.Icon} />
                                                      <View style={InputBoxStyles.inputboxContainer}>
                                                      <TextInput
                                                            placeholder={"Area Name"}
                                                            style={InputBoxStyles.Input}
                                                            placeholderTextColor="#A5A5A5"
                                                            value={values.AreaName}
                                                            onChangeText={handleChange('AreaName')}
                                                            onBlur = {() =>setFieldTouched('AreaName')}
                                                            onFocus = {()=> setenableshift(false)}
                                                      />
                                                      </View>
                                                </View>
                                          </Card>
                                    </View>

                                    <View style={registerAddressStyles.inputContainerInput}>
                                          <Text style={registerAddressStyles.registerLabel}> PinCode</Text>
                                          {touched.PinCode && errors.PinCode &&
                                                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.PinCode}</Text>
                                          }
                                          <Card style={registerAddressStyles.Cards}>
                                                <View style={registerAddressStyles.registerTextImage}>
                                                      <Image source={require(`../assets/Form/lock.png`)} style={styles.Icon} />
                                                      <View style={InputBoxStyles.inputboxContainer}>
                                                      <TextInput
                                                            placeholder={"PinCode"}
                                                            style={InputBoxStyles.Input}
                                                            placeholderTextColor="#A5A5A5"
                                                            keyboardType="numeric"
                                                            value={values.PinCode}
                                                            onChangeText={handleChange('PinCode')}
                                                            onBlur = {() =>setFieldTouched('PinCode')}
                                                            onFocus = {()=> setenableshift(true)}
                                                      />
                                                      </View>
                                                </View>
                                          </Card>
                                    </View>

                                    <View style={registerAddressStyles.inputContainerInput}>
                                          <Text style={registerAddressStyles.registerLabel}> Full Address</Text>
                                          {touched.FullAddress && errors.FullAddress &&
                                                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.FullAddress}</Text>
                                          }
                                          <Card style={registerAddressStyles.secondCard}>
                                                <View style={registerAddressStyles.registerTextImage}>
                                                      <Image source={require(`../assets/Form/Address.png`)} style={styles.Icon} />
                                                      <View style={InputBoxStyles.inputboxContainer}>
                                                      <TextInput
                                                            placeholder={"Address"}
                                                            style={InputBoxStyles.Input}
                                                            placeholderTextColor="#A5A5A5"
                                                            value={values.FullAddress}
                                                            onChangeText={handleChange('FullAddress')}
                                                            onBlur = {() =>setFieldTouched('FullAddress')}
                                                            onFocus = {()=> setenableshift(true)}
                                                      />
                                                      </View>
                                                </View>
                                          </Card>
                                    </View>

                                    <Button 
                                          title="Next" 
                                          onPress={handleSubmit} />
                              </View>
                        )}
                  </Formik>
            </SafeAreaView>
            </KeyboardAvoidingView>         
      )
}

const mapDispatchToProps =(dispatch)=>{
      return{
          checkIfPhoneNumberExistsInFirestore : (phoneNumber) => dispatch(checkIfPhoneNumberExistsInFirestore(phoneNumber))
      }
}
export default connect(null, mapDispatchToProps)(RegisterAddressScreen)
