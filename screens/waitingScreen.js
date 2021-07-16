import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import styles from '../styles/waitingScreenStyle'
key = 2

const waitingScreen = ({ navigation }) => {
  switch (key) {
    case 1:
      return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('TabNavigation')}>

          <View style={styles.UnderWaitingScreenContainer}>
            <View style={styles.UnderWaitingScreenImage}>
              <Image source={require('../assets/Image/ScreenImage/waiting.png')} />
            </View>
            <View style={styles.UnderWaitingScreenText}>
              <Text style={styles.textHeadingWaiting} >Thank you for your patience</Text>
              <Text style={styles.textParagraphWaiting}>Your request is under review</Text>
            </View>

          </View>
        </TouchableWithoutFeedback>
      )
      break;

    case 2:
      return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('TabNavigation')}>

          <View style={styles.UnderReviewScreenContainer} >
            <View style={styles.UnderReviewScreenImage}>
              <Image source={require('../assets/Image/ScreenImage/Queued.png')} />
            </View>

            <View style={styles.UnderReviewScreenText} >
              <Text style={styles.textHeading} >Welcome</Text>
              <Text style={styles.textParagraph}>Give us some time your request is under process</Text>

            </View>

          </View>

        </TouchableWithoutFeedback>
      )

    default:
      break;
  }

  return (
    <>
    </>
  )
}

export default waitingScreen
