import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from '../../styles/componentStyles/BannerDiscriptionStyle'

const BannerDiscription = (props) => {
    return (
        <View style={styles.bannerContainer}>
            <View style={props.offerContainer}>
                <Text style={styles.offerText}>{props.offer}</Text>
            </View>
            <View style={styles.statusContainer}>
                <View style={styles.stateContainer}>
                    <Text style={props.statusColor}>{props.state}</Text>
                </View>
               
                <View style={styles.DateContainer}>
                    <Text style={styles.DateText}>Requested on </Text>
                    <Text style={styles.DateColor}>{props.DateRequested}</Text>
                </View>
            </View>
        </View>
    )
}
export default BannerDiscription

