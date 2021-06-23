import React from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import styles from '../styles/componentStyles/Button'
const Button = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.registerBtn} onPress={props.onPress} >
                <Text style={styles.registerBtnText} >{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button

