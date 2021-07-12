import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

const AddDiscription = (props) => {
    return (

        <Card style={styles.cardStyle}>


            <Card.Cover source={props.Image} />
            <Card.Actions style={styles.cardAdd}>
                <View style={styles.Validity}>
                    <Text style={styles.state}>Active</Text>
                    <View style={styles.Calender}>
                {/* //ExpiryDetail */}
                        <Text style={styles.Date}>{props.date}</Text>
                    </View>
                </View>
                <View style={styles.secondHalf}>
                    <View style={styles.CalenderTicket}>
                        <FontAwesome name="ticket" size={20} color="#fff" />
                        <Text style={styles.ticket}>{props.ticket}</Text>
                    </View>
                    <View style={styles.Calender}>
                        <FontAwesome name="eye" size={20} color="#fff" />
                        <Text style={styles.Views}>{props.Views}</Text>
                    </View>
                </View>

            </Card.Actions>
        </Card>


    )
}

export default AddDiscription

const styles = StyleSheet.create({
    cardStyle: {
        width: 370,
        left: 10,
        marginTop: 10,
        borderRadius:21
    },
    cardAdd: {
        backgroundColor: '#292930',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    state: {
        color: '#05EC41',
        margin: 10,
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0.5
    },

    Calender: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        bottom:10

    },
    CalenderTicket: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8

    },
    Validity: {
        flexDirection: 'column',
        
    },

    Date: {
        color: '#fff',
        left: 2,
        fontSize: 18
    },
    ticket: {
        color: '#fff',
        left: 10,
        fontSize: 17,
        fontWeight: '500',
        letterSpacing: 0.5
    },
    Views: {
        color: '#fff',
        left: 10,
        fontSize: 17,
        fontWeight: '500',
        letterSpacing: 0.5
    },

})
