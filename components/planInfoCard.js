import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

const PlanInfoCard = (props) => {
    return (
        <View style={styles.planHeader}>
            <View style={styles.headerCard}>
                <Image source={props.Image} style={props.ImageStyle} />
                <Text style={styles.HeaderText}>{props.planName}</Text>
            </View>

            <View style={styles.rupeesContainer}>
                <View style={styles.priceSaleContainer}>
                    <Text style={styles.ruppesText}>₹</Text>
                    <Text style={styles.saleText}>{props.PriceSale}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={props.ruppesText}>₹</Text>
                    <View style={styles.cost}>
                        <Text style={props.priceText}>{props.price}</Text>
                        <Text style={styles.durationText}>{props.duration}</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity onPress={props.onPress} style={props.buttonStyles}>
                <Text style={styles.ButtonText}>Subscribe</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PlanInfoCard

const styles = StyleSheet.create({
    planHeader: {
        backgroundColor: '#292930',
        padding: 12,
        alignItems: 'center',
        height: 382,
        width: 340,
        left: 18,
        borderRadius: 22
    },
    headerCard: {
        alignItems: 'center'
    },

    HeaderText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 25,
        bottom: 100,
    },
    priceSaleContainer: {
        flexDirection: 'row'
    },
    ruppesText: {
        color: '#919191',
        fontSize: 18,
        right: 10
    },
    saleText: {
        color: '#919191',
        fontSize: 28,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontWeight: '700'
    },
    rupeesContainer: {
        bottom: 30,
        alignItems:'center'
    },
    priceContainer: {
        flexDirection: 'row'
    },
   
  cost:{
        alignItems:'center'
    },
    durationText:{
        fontSize:20,
        color:'#fff'
    },
    ButtonText:{
        fontSize:20,
        color:'#fff'
    }

})
