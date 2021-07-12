import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const OverallDues = (props) => {
    return (
        <View style={styles.OverallContainer}>
            <View style={styles.duesText}>
                <Text style={styles.duesDate}>{props.date}</Text>
                <Text style={styles.dueUnderline}></Text>
            </View>
           
                <View style={styles.CircleContainer}>
                    <View style={styles.ImageContainer}>
                        <Image source={require('../assets/plans/blueCircle.png')} style={{width:150,height:150}}/>
                        <Text style={styles.GenratedText}>{props.genrated}</Text>
                    </View>
                    <Text style={styles.GenratedHeading}>Total ads genrated</Text>
                </View>
                <View style={styles.CircleContainerTwo}>
                    <View style={styles.ImageContainer}>
                        <Image source={require('../assets/plans/greenCircle.png')} style={{width:150,height:150}}/>
                        <Text style={styles.GenratedText}>{props.genrated}</Text>
                    </View>
                    <Text style={styles.GenratedHeading}>Total coupons applied</Text>
                </View>
           
        </View>
    )
}

export default OverallDues

const styles = StyleSheet.create({

    OverallContainer: {
        backgroundColor: '#292930',
        padding: 12,
        alignItems: 'center',
        height: 482,
        width: 370,
        left: 8,
        borderRadius: 12
    },
    duesDate: {
        fontSize: 20,
        color: '#fff'
    },
    dueUnderline: {
        backgroundColor: '#444444',
        height: 3,
        top: 10
    },
    ImageContainer:{
        flexDirection:'row',
        alignItems:'center',
        left:20
    },
    GenratedText:{
        color:'#fff',
        fontSize:30,
        right:95,
        fontWeight:'800'
    },
    CircleContainer:{
        top:20,
        alignItems:'center',
        justifyContent:'center'
    },
    CircleContainerTwo:{
        top:40,
        alignItems:'center',
        justifyContent:'center'
    },
    GenratedHeading:{
        fontSize:20,
        color:'#fff'
    }

})
