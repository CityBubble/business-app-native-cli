import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import styles from '../styles/componentStyles/DuesStyle'
const DuesComponents = (props) => {
    return (
        <View style={props.duesContainer}>
            <View style={styles.duesText}>
                <Text style={styles.duesDate}>{props.date}</Text>
                <Text style={styles.dueUnderline}></Text>
            </View>
            <View style={styles.InfoContainer}>

                <View style={styles.dueCircle}>
                    <View style={styles.ImageContainer}>
                        <Image source={require('../assets/plans/blueCircle.png')} style={styles.imageStyle} />
                        <Text style={styles.GenratedText}>{props.addGenrated}</Text>
                        <Text style={styles.textGenrate}>Ads Published</Text>
                    </View>
                    <View style={styles.ImageContainer}>
                        <Image source={require('../assets/plans/greenCircle.png')} style={styles.imageStyle} />
                        <Text style={styles.GenratedText}>{props.Coupons}</Text>
                        <Text style={styles.textCoupons}>Coupons Applied</Text>
                    </View>
                    <View style={styles.ImageContainer}>
                        <Image source={require('../assets/plans/purpleCircle.png')} style={styles.imageStyle} />
                        <Text style={styles.GenratedTextDue}>{props.dues}</Text>
                        <Text style={styles.textDueleft}>total Due</Text>
                    </View>
                </View>

            </View>
            <View style={styles.warningDue}>
                <Text style={styles.textWarning}>{props.warningText}</Text>
                <View style={styles.WarningTextContainer}>
                    <Text style={styles.dueWarning} >{props.duesText}</Text>
                    <Text style={styles.warningTextTwo} >{props.warningTextTwo}</Text>
                </View>
            </View>

            <TouchableOpacity style={props.ButtonStyles}>
                <Text style={{ color: '#fff', fontSize: 15, fontWeight: '700' }}>{props.ButtonName}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DuesComponents

