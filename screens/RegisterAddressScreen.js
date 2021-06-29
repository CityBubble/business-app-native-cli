import React from 'react'
import { SafeAreaView } from 'react-native'
import { Text, View, Image } from 'react-native'
import { Card } from 'react-native-shadow-cards'
import InputBox from '../components/Inputbox'
import Header from '../components/Header'
import registerAddressStyles from '../styles/RegisterAddress'
import Button from '../components/Button'
 

const RegisterAddressScreen = ({ navigation }) => {

      return (
            <SafeAreaView style={registerAddressStyles.registerScreen}>

                  <View>
                        <Header
                              onPress={() => navigation.navigate('RegisterScreen')}
                        />
                  </View>
                  <View style={registerAddressStyles.registerScreenInput}>

                        <View style={registerAddressStyles.inputContainerInput}>
                              <Text style={registerAddressStyles.registerLabel}> City</Text>
                              <Card style={registerAddressStyles.Cards}>
                                    <View style={registerAddressStyles.registerTextImage}>
                                          <Image source={require(`../assets/Form/City.png`)} style={{ width: 25, height: 25 }} />
                                          <InputBox
                                                Title="City" />
                                    </View>
                              </Card>
                        </View>
                        <View style={registerAddressStyles.inputContainerInput}>
                              <Text style={registerAddressStyles.registerLabel}>Area</Text>
                              <Card style={registerAddressStyles.Cards}>
                                    <View style={registerAddressStyles.registerTextImage}>
                                          <Image source={require(`../assets/Form/Area.png`)} style={{ width: 25, height: 25 }} />
                                          <InputBox
                                                Title="Area" />
                                    </View>
                              </Card>
                        </View>
                        <View style={registerAddressStyles.inputContainerInput}>
                              <Text style={registerAddressStyles.registerLabel}>Pincode</Text>
                              <Card style={registerAddressStyles.Cards}>
                                    <View style={registerAddressStyles.registerTextImage}>
                                          <Image source={require(`../assets/Form/lock.png`)} style={{ width: 25, height: 25 }} />
                                          <InputBox
                                                Title="Pincode" />
                                    </View>
                              </Card>
                        </View>
                        <View style={registerAddressStyles.inputContainerInput}>
                              <Text style={registerAddressStyles.registerLabel}> Full address</Text>
                              <Card style={registerAddressStyles.secondCard}>
                                    <View style={registerAddressStyles.registerTextImage}>
                                          <Image source={require(`../assets/Form/Address.png`)} style={{ width: 25, height: 25 }} />
                                          <InputBox
                                                Title="Address" />
                                    </View>
                              </Card>

                        </View>
                        <Button title="Next" onPress={() => { navigation.navigate('ProofScreen') }} />
                  </View>
            </SafeAreaView>
      )
}

export default RegisterAddressScreen
