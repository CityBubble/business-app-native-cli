import React, { useState } from 'react'
import { Alert } from 'react-native'
import { Text, View, Image, Modal, TouchableOpacity } from 'react-native'
import ModalPicker from '../components/ModalPicker'
import Button from '../components/Button'
import locationStyles from '../styles/Location'


/**
 * First Screen where location is asked by user
 */
const LocationScreen = ({ navigation }) => {

  const [choosecity, setChooseCity] = useState('Select City .....');
  const [isModalVisible, setIsModalVisible] = useState(false)
  const chooseModalVisibility = (condition) => {
    setIsModalVisible(condition)
  }

  const setLocation = () => {
    if (choosecity === "Select City .....") {
      Alert.alert(
        "Invalid Selection",
        "Select a location",
        [{
          text: 'Cancel',
          style: 'cancel'
        }]
      )
    }
    else {
      navigation.navigate('Login')
    }
  }


  return (
    <View style={locationStyles.location}>
      <View style={locationStyles.locationContainer}>
        <Image source={require('../assets/Image/location.png')} style={locationStyles.locationImage} />
        <View style={locationStyles.locationText}>
          <Text style={locationStyles.locationAccess}>{`You are currently in `}</Text>
          <Text style={locationStyles.locationCity}>{choosecity}</Text>
        </View>
      </View>
      <View style={locationStyles.locationDropdownContainer}>
        <Text style={locationStyles.locationTextSmall}>Tell us your city</Text>
        <TouchableOpacity
          style={locationStyles.locationTouchable}
          onPress={() => chooseModalVisibility(true)}>
          <Image source={require('../assets/Image/City.png')} />
          <Text style={locationStyles.dropdownText}>{choosecity}</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType='fade'
          visible={isModalVisible}
          nRequestClose={() => chooseModalVisibility(false)}
        >
          <ModalPicker
            chooseModalVisibility={chooseModalVisibility}
            setchooseCity={setChooseCity}
          />
        </Modal>
      </View>
      <Button title="Next" onPress={setLocation} />
    </View>
  )
}

export default LocationScreen