import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { StyleSheet, Text, View,Image } from 'react-native'
import styles from '../../styles/UnderWaitingScreen'

const underWaitingScreen = ({navigation}) => {
    return (
        <TouchableWithoutFeedback onPress={()=>navigation.navigator('TabNavigation')}>

        <View style={styles.UnderWaitingScreenContainer}>
          <View style={styles.UnderWaitingScreenImage}>
<Image source={require('../../assets/Image/ScreenImage/waiting.png')} />
          </View>
<View style={styles.UnderWaitingScreenText}>
<Text style={styles.textHeading} >Thank you for your patience</Text>
<Text style={styles.textParagraph}>Your request is under review</Text>
</View>

        </View>
        </TouchableWithoutFeedback>
    )
}

export default underWaitingScreen