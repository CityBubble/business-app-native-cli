import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'



const waitingScreen = ({ navigation }) => {
  const [firstUser, setFirstUser] = useState(true)


  return (
    <View>
      {firstUser ? navigation.navigate('underReviewScreen') : navigation.navigate('underWaitingScreen')}
    </View>
  )
}

export default waitingScreen

const styles = StyleSheet.create({})