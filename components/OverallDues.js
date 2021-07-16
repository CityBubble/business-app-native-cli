import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import styles from '../styles/componentStyles/OverallDuesStyles'
const OverallDues = (props) => {
    return (
        <View style={styles.OverallContainer}>
            <View style={styles.duesText}>
                <Text style={styles.duesDate}>{props.date}</Text>
                <Text style={styles.dueUnderline}></Text>
            </View>
           
                <View style={styles.CircleContainer}>
                    <View style={styles.ImageContainer}>
                        <Image source={require('../assets/plans/blueCircle.png')} style={styles.imageStyle}/>
                        <Text style={styles.GenratedText}>{props.genrated}</Text>
                    </View>
                    <Text style={styles.GenratedHeading}>Total ads genrated</Text>
                </View>
                <View style={styles.CircleContainerTwo}>
                    <View style={styles.ImageContainer}>
                        <Image source={require('../assets/plans/greenCircle.png')} style={styles.imageStyle}/>
                        <Text style={styles.GenratedText}>{props.genrated}</Text>
                    </View>
                    <Text style={styles.GenratedHeading}>Total coupons applied</Text>
                </View>
           
        </View>
    )
}

export default OverallDues


