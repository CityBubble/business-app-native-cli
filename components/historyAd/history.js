import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, Image,TouchableOpacity } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const History = (props) => {
    return (
        <View>
            <View style={styles.dateStyle}>
               
                <Text style={styles.dateText}>{props.Date}</Text>
            </View>
           
                
            <Card style={styles.cardStyle}>
                <Card.Cover source={props.Image} />
                <Card.Actions style={styles.cardAdd}>
                    <View style={styles.Validity}>
                        <View style={styles.statusContainer}>
                            <View style={styles.stateContainer}>
                                <View style={styles.IconText}>
                                    <FontAwesome name="calendar" size={18} color="#fff" />
                                    <Text style={styles.statusText} >Launched on </Text>
                                </View>
                                <Text style={styles.statusColor}>{props.Launched}</Text>
                            </View>
                            <View style={styles.DateContainer}>
                                <View style={styles.IconText}>
                                    <FontAwesome name="calendar" size={18} color="#fff" />
                                    <Text style={styles.DateText}>Expired on </Text>
                                </View>
                                <Text style={styles.DateColor}>{props.Expired}</Text>
                            </View>
                        </View>
                    </View>

                </Card.Actions>
                <View style={styles.secondHalf}>
                    <View style={styles.Calender}>
                        <FontAwesome name="ticket" size={24} color="#fff" />
                        <Text style={styles.ticket}>{props.ticket}</Text>
                    </View>
                    <View style={styles.CalenderViews}>
                        <FontAwesome name="eye" size={24} color="#fff" />
                        <Text style={styles.Views}>{props.Views}</Text>
                    </View>
                </View>
            </Card>
            
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    dateStyle: {
        flexDirection: 'row',
        padding: 12,
        marginTop: 20,

    },
    dotText: {
        color: '#4852ff',

    },
    dateText: {
        fontSize: 17,
        color: '#fff',
        paddingLeft: 12
    },
    cardStyle: {
        width: 370,

        left: 10,
        marginTop: 20,

    },
    cardAdd: {
        backgroundColor: '#292930',
        height: 100,

        alignItems: 'center'

    },
    state: {
        color: '#05EC41',
        margin: 10,
        fontSize: 20,
        fontWeight: '600'
    },


    Calender: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8

    },
    CalenderViews: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 38

    },

    Date: {
        color: '#fff',
        left: 15,
        fontSize: 18
    },
    ticket: {
        color: '#fff',
        left: 15,
        fontSize: 18
    },
    Views: {
        color: '#fff',
        left: 5,
        fontSize: 18,
    },
    IconText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    stateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    statusText: {
        color: '#CFCFCF',
        fontSize: 18,
        paddingLeft: 10
    },
    DateContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    DateText: {
        color: '#CFCFCF',
        fontSize: 18,
        paddingLeft: 10
    },
    DateColor: {
        color: '#fff',
        letterSpacing: 0.7,
        left: 83,
        fontSize: 18
    },
    statusColor: {
        color: '#fff',
        letterSpacing: 0.7,
        left: 83,
        fontSize: 18
    },
    secondHalf:{
        backgroundColor:'#292930',
        flexDirection:'row',
        justifyContent:'space-between'
    }

})
