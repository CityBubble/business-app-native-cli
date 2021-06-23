import React from 'react'
import { TextInput, View } from 'react-native'
import styles from '../styles/componentStyles/InputBox'

const Inputbox = (props) => {
    return (
        <View style={styles.inputboxContainer}>

            <TextInput
                placeholder={props.Title}
                style={styles.Input}
                placeholderTextColor="#A5A5A5"
                keyboardType={props.keybord}
                value={props.value}
                onChangeText={props.onChangeText}
                editable={props.edit}
            />
        </View>
    )
}

export default Inputbox

