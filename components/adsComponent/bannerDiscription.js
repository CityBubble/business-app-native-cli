import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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

const styles = StyleSheet.create({
    bannerContainer: {
        padding: 12,
        marginTop: 32,
        width: 370,
        left: 10,
    },
    offerText: {
        borderRadius: 20,
        fontWeight: '700',
        fontSize: 30,
        color: '#fff',
        textAlign: 'center'
    },
    statusContainer: {
        backgroundColor: '#292930',
        padding: 12,
        width: 360,
        right: 10,
        height:80,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
  
    statusText: {
        color: '#fff',
        fontSize: 17
    },
    DateContainer: {
        alignItems: 'center',
        padding: 12,
        borderLeftWidth: 1,
        borderLeftColor: '#A5A5A5',
        width: 160,
        height:76
    
    },
    DateText: {
        color: '#fff',
        fontSize: 16,
    padding:3
        
    },
    DateColor: {
        color: '#fff',
        letterSpacing: 0.7,
        fontSize: 20
    },
 

})
