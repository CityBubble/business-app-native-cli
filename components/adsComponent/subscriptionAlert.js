import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SubscriptionAlert = (props) => {
    return (
        <View style={props.alertHeading}>
            <Text style={props.WarningtextStyle}>{props.Warningtext}</Text>
            <Text style={props.DaysStyle}>{props.Days}</Text>
            <Text style={props.WarningtextStyleTwo}>{props.alertText}</Text>
            <FontAwesome name={props.IconName} size={18} color={'#fff'} onPress={props.iconPress} style={props.IconStyle} />
            <TouchableOpacity style={props.buttonStyle} onPress={props.navigation} >
                <Text style={props.buttonTextStyle}>{props.buttonName}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SubscriptionAlert

const styles = StyleSheet.create({})
