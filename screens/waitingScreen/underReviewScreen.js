import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { StyleSheet, Text, View ,Image} from 'react-native'
import styles from '../../styles/UnderReviewScreen'


const UnderReviewScreen = ({navigation}) => {
    return (
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('TabNavigation') }>

        <View style={styles.UnderReviewScreenContainer} >
<View style={styles.UnderReviewScreenImage}>
<Image source={require('../../assets/Image/ScreenImage/Queued.png')} />
</View>

<View style={styles.UnderReviewScreenText} >
<Text style={styles.textHeading} >Welcome</Text>
<Text style={styles.textParagraph}>Give us some time your request is under process</Text>

</View>
       
        </View>

        </TouchableWithoutFeedback>
    )
}

export default UnderReviewScreen