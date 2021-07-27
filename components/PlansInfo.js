import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from '../styles/componentStyles/PlanInfoStyle'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const PlansInfo = (props) => {
    return (
        <View style={props.styleBox}>
            <View style={styles.aboveContainer}>

                <View style={styles.ImageContainer}>

                    <Image source={props.Image} style={props.ImageStyle} />
                    <Text style={styles.Heading}>{props.PlanName}</Text>
                    <Text style={props.Underline}></Text>
                </View>
                <View style={styles.TextPlans}>
                    <View style={styles.info}>
                        <FontAwesome name="check" color={props.iconColor} size={hp('2.2%')} />
                        <Text style={styles.TextInfo}>{props.TextFirst}</Text>
                    </View>
                    <View style={styles.info}>
                        <FontAwesome name="check" color={props.iconColor} size={hp('2.2%')} />
                        <Text style={styles.TextInfo}>{props.TextSecond}</Text>
                    </View>
                    <View style={styles.info}>
                        <FontAwesome name="check" color={props.iconColor} size={hp('2.2%')} />
                        <Text style={styles.TextInfo}>{props.TextThird}</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={props.onPress} style={props.buttonNameStyles}>
                    <Text style={styles.ButtonText}>{props.ButtonName}</Text>
                    <FontAwesome name="arrow-right" color="#fff" size={hp('2%')} style={styles.arrow} />

                </TouchableOpacity>
            </View>

        </View>
    )
}

export default PlansInfo

