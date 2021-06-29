import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import Checkboxstyles from '../styles/componentStyles/Checkbox'

const Checkbox = () => {

    const [isSelected, setisSelected] = useState(false)

    const onNotSelected = () => {
        setisSelected(!isSelected);
    }
    return (
        <Pressable
            style={[Checkboxstyles.checkboxBase, isSelected && Checkboxstyles.CheckboxChecked]}
            onPress={onNotSelected}
        >
            {isSelected && <Ionicons name="checkmark" size={18} color="#000" />}


        </Pressable>
    )
}

export default Checkbox


