import React from 'react'
import { Text, View } from 'react-native'
import { FontAwesome } from 'react-native-vector-icons'
import styles from '../styles/componentStyles/AccountInformation'
const AccountInformation = (props) => {
    return (
        <View style={styles.InformationContainer}>

            <Text style={styles.InformationText} >{props.Text}</Text>

            <FontAwesome name="chevron-right" size={17} color="#fff" />
            
        </View>
    )
}

export default AccountInformation
