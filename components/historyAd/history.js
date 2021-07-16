import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, Image, TouchableOpacity } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from '../../styles/componentStyles/historyStyleScreen'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
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
                                    <FontAwesome name="calendar" size={hp('2.2%')} color="#fff" />
                                    <Text style={styles.statusText} >Launched on </Text>
                                </View>
                                <Text style={styles.statusColor}>{props.Launched}</Text>
                            </View>
                            <View style={styles.DateContainer}>
                                <View style={styles.IconText}>
                                    <FontAwesome name="calendar" size={hp('2.2%')} color="#fff" />
                                    <Text style={styles.DateText}>Expired on </Text>
                                </View>
                                <Text style={styles.DateColor}>{props.Expired}</Text>
                            </View>
                        </View>
                    </View>

                </Card.Actions>
                <View style={styles.secondHalf}>
                    <View style={styles.Calender}>
                        <FontAwesome name="ticket" size={hp('2.2%')} color="#fff" />
                        <Text style={styles.ticket}>{props.ticket}</Text>
                    </View>
                    <View style={styles.CalenderViews}>
                        <FontAwesome name="eye" size={hp('2.2%')}color="#fff" />
                        <Text style={styles.Views}>{props.Views}</Text>
                    </View>
                </View>
            </Card>

        </View>
    )
}

export default History

