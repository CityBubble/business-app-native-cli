import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const PlansInfo = (props) => {
    return (
        <View style={props.styleBox}>
            <View style={styles.ImageContainer}>

                <Image source={props.Image} style={props.ImageStyle} />
                <Text style={styles.Heading}>{props.PlanName}</Text>
                <Text style={props.Underline}></Text>
            </View>
            <View style={styles.TextPlans}>
                <View style={styles.info}>
                    <FontAwesome name="check" color={props.iconColor} size={20} />
                    <Text style={styles.TextInfo}>{props.TextFirst}</Text>
                </View>
                <View style={styles.info}>
                    <FontAwesome name="check" color={props.iconColor} size={20}/>
                    <Text style={styles.TextInfo}>{props.TextSecond}</Text>
                </View>
                <View style={styles.info}>
                    <FontAwesome name="check" color={props.iconColor} size={20} />
                    <Text style={styles.TextInfo}>{props.TextThird}</Text>
                </View>

                <TouchableOpacity onPress={props.onPress} style={props.buttonNameStyles}>
                    <Text style={styles.ButtonText}>{props.ButtonName}</Text>
                    <FontAwesome name="arrow-right"  color="#fff" size={18} style={styles.arrow}/>

                </TouchableOpacity>
            </View>

        </View>
    )
}

export default PlansInfo

const styles = StyleSheet.create({


    ImageContainer: {
        alignItems: 'center',
    },


    TextPlans: {
        top: 30,
        // alignItems:'center'
        left: 16
    },
    Heading: {
        color: '#fff',
        marginVertical: 10,
        fontSize: 20,
        fontWeight: '600'
    },
    info: {

        flexDirection: 'row',
        alignItems: 'center',
        right: 20

    },
    TextInfo: {
        color: '#fff',
        left: 10,
        textAlign: 'left'
    },

    ButtonText: {
        color: '#fff',
        fontWeight: '700',
        right: 10

    },
    Button: {
        padding: 12
    },
    arrow: {
        left: 10
    }




})