import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'

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
                    </View>
                    <View style={styles.ImageContainer}>
                        <Image source={require('../assets/plans/greenCircle.png')} style={styles.imageStyle}  />
                        <Text style={styles.GenratedText}>{props.Coupons}</Text>
                    </View>
                    <View style={styles.ImageContainer}>
                        <Image source={require('../assets/plans/purpleCircle.png')} style={styles.imageStyle}  />
                        <Text style={styles.GenratedTextDue}>{props.dues}</Text>
                    </View>
                </View>
                <View style={styles.textDue}>
                    <Text style={styles.textGenrate}>Ads Published</Text>
                    <Text style={styles.textCoupons}>Coupons Applied</Text>
                    <Text style={styles.textDueleft}>Total Due</Text>
                </View>
            </View>
            <View style={styles.waringDue}>
                <Text style={styles.textWarning}>{props.warningText}</Text>
                <Text style={styles.dueWarning} >{props.duesText}</Text>
                <Text style={styles.waringTextTwo} >{props.warningTextTwo}</Text>
            </View>

            <TouchableOpacity style={props.ButtonStyles}>
                <Text style={{ color: '#fff', fontSize: 15,fontWeight:'700' }}>{props.ButtonName}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DuesComponents

const styles = StyleSheet.create({


    duesDate: {
        fontSize: 20,
        color: '#fff'
    },
    dueUnderline: {
        backgroundColor: '#444444',
        height: 3,
        top: 10
    },
    dueCircle: {
        padding: 8,
        flexDirection: 'row',
        marginTop: 12,
        
      left:30
    },
  
 
 
    textDue: {
        flexDirection: 'row',
        alignItems: 'center',
        bottom:40
    },
    textGenrate: {
        right: 67,
        width: 78,
        textAlign: 'center',
        color: '#fff',
        fontSize: 17
    },
    textCoupons: {
        right: 15,
        width: 70,
        textAlign: 'center',
        color: '#fff',
        fontSize:17
    },
    textDueleft: {
        left: 55,
        width: 50,
        textAlign: 'center',
        color: '#fff',
        fontSize:17
    },
    InfoContainer: {
        alignItems: 'center',
        top: 20
    },
    waringDue: {
        // flexDirection:'row',
        top:10,
        alignItems: 'center',
        textAlign: 'center',
        width: 300

    },
    textWarning: {
        fontSize: 17,
        color: '#fff',
        margin: 3,

    },
    dueWarning: {
        color: '#4852ff',
        fontWeight: '800',
        fontSize: 19,
        right: 72,
        margin: 3
    },
    waringTextTwo: {
        fontSize: 17,
        color: '#fff',
        margin: 3,
        bottom:27,
        left:60
    },
    ImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    
        bottom:30
    }, 
    GenratedText:{
        color:'#fff',
        fontSize:20,
        right:62,
        fontWeight:'800',
        textAlign:'center'
    },
    GenratedTextDue:{
        color:'#fff',
        fontSize:20,
        right:75,
        fontWeight:'800',
    },
    imageStyle:{
        width: 100, 
        height: 120 
    }


})
