import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../styles/waitingScreenStyle'

const waitingScreen = () => {
      return (
          <View style={styles.UnderWaitingScreenContainer}>
            <View style={styles.UnderWaitingScreenImage}>
              <Image source={require('../assets/Image/ScreenImage/waiting.png')} />
            </View>
            <View style={styles.UnderWaitingScreenText}>
              <Text style={styles.textHeadingWaiting} >Thank you for your patience</Text>
              <Text style={styles.textParagraphWaiting}>Your request is under review</Text>
            </View>
          </View>
      )
}

export default waitingScreen
