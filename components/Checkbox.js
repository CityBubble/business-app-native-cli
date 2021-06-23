import React,{useState} from 'react'
import { StyleSheet, Text, View,Pressable } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import styles from '../styles/components/Checkbox'
const Checkbox = () => {

const[isSelected,setisSelected] =useState(false)

const onNotSelected=()=>{
    setisSelected(!isSelected);
}
    return (
     <Pressable 
     style={[styles.checkboxBase,isSelected&& styles.CheckboxChecked]}
 onPress={onNotSelected}
 >
     {isSelected && <Ionicons name="checkmark" size={18} color="#000"   />}
         
     
     </Pressable>
    )
}

export default Checkbox


