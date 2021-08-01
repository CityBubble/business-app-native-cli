import React from 'react'
import { SafeAreaView } from 'react-native'
import { Text, View, Image , TextInput } from 'react-native'
import { Card } from 'react-native-shadow-cards'
import InputBox from '../components/Inputbox'
import Header from '../components/Header'
import registerAddressStyles from '../styles/RegisterAddress'
import Button from '../components/Button'
import styles from '../styles/RegisterAddress'
import InputBoxStyles from '../styles/componentStyles/InputBox'


 

const RegisterAddressScreen = (props) => {

      const {navigation , route } = props;
      const [enableshift , setenableshift] = useState(false)


      return (

            <KeyboardAvoidingView
                  behavior={"position"}
                  style={registerAddressStyles.registerScreen}
                  enabled={enableshift}
            >
                   <SafeAreaView>
                   <Formik
                            initialValues = {{
                                PhoneNumber : '',  
                                AreaName : '',
                                PinCode : '',
                                FullAddress : ''
                            }}
                            onSubmit = {values => navigation.navigate('ProofScreen',{...values })}
                            validationSchema={yup.object().shape({
                                 PhoneNumber : yup
                                 .number()
                                 .test('len', 'Phone Number must be exactly 10 digits' , val => val.length =5)
                                 .required('Please provide your Contact Number!'),
                                AreaName: yup
                                  .string()
                                  .required('Please, provide your Area Name!'),
                                PinCode: yup
                                  .string()
                                  .required('Please, provide your PinCode!'),
                                  FullAddress : yup
                                    .string()
                                    .required('Please provide full address of your Business')
                              })}
                  > 

                        {({values,handleChange , errors, setFieldTouched , touched , isValid , handleSubmit}) =>(
                              <View>
                                    <View style={registerAddressStyles.inputContainerInput}>
                                          <Text style={registerAddressStyles.registerLabel}> Primary number</Text>
                                          {touched.PhoneNumber && errors.PhoneNumber &&
                                                        <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.PhoneNumber}</Text>
                                          }
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
                                    <Button title="Next" onPress={handleSubmit} />
                              </View>
                        )}
                  
                  </Formik>

{/* <View style={registerAddressStyles.registerScreenInput}>

      <View style={registerAddressStyles.inputContainerInput}>
            <Text style={registerAddressStyles.registerLabel}> Primary number</Text>
            <Card style={registerAddressStyles.Cards}>
                  <View style={registerAddressStyles.registerTextImage}>
                        <Image source={require(`../assets/Form/Phone.png`)} style={styles.Icon} />
                        <InputBox
                              Title="Phone number" />
                  </View>
            </Card>
      </View>
      <View style={registerAddressStyles.inputContainerInput}>
            <Text style={registerAddressStyles.registerLabel}>Area</Text>
            <Card style={registerAddressStyles.Cards}>
                  <View style={registerAddressStyles.registerTextImage}>
                        <Image source={require(`../assets/Form/Area.png`)} style={styles.Icon} />
                        <InputBox
                              Title="Area" />
                  </View>
            </Card>
      </View>
      <View style={registerAddressStyles.inputContainerInput}>
            <Text style={registerAddressStyles.registerLabel}>Pincode</Text>
            <Card style={registerAddressStyles.Cards}>
                  <View style={registerAddressStyles.registerTextImage}>
                        <Image source={require(`../assets/Form/lock.png`)} style={styles.Icon}/>
                        <InputBox
                              Title="Pincode" />
                  </View>
            </Card>
      </View>
      <View style={registerAddressStyles.inputContainerInput}>
            <Text style={registerAddressStyles.registerLabel}> Full address</Text>
            <Card style={registerAddressStyles.secondCard}>
                  <View style={registerAddressStyles.registerTextImage}>
                        <Image source={require(`../assets/Form/Address.png`)} style={styles.Icon} />
                        <InputBox
                              Title="Address" />
                  </View>
            </Card>

      </View>
      <Button title="Next" onPress={() => { navigation.navigate('ProofScreen') }} />
</View> */}
            </SafeAreaView>

            
            
            </KeyboardAvoidingView>
           
      )
}

export default RegisterAddressScreen
