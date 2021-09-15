import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, Image, TouchableOpacity } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from '../../styles/componentStyles/historyStyleScreen'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
const HistoryNew = (props) => {
    const adObj = props.adData;
    console.log('Ad Obj => '+ JSON.stringify(adObj));
    return (
        <View>
            <View style={styles.dateStyle}>
                <Text style={styles.dateText}>{adObj.expiry}</Text>
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
                                <Text style={styles.statusColor}>{adObj.launch}</Text>
                            </View>
                          
                        </View>
                    </View>

                </Card.Actions>
                <View style={styles.secondHalf}>
                    <View style={styles.Calender}>
                        <FontAwesome name="ticket" size={hp('2.2%')} color="#fff" />
                        <Text style={styles.ticket}>{adObj.coupones}</Text>
                    </View>
                    <View style={styles.CalenderViews}>
                        <FontAwesome name="eye" size={hp('2.2%')}color="#fff" />
                        <Text style={styles.Views}>{adObj.views}</Text>
                    </View>
                </View>
            </Card>

        </View>
    )
}

export default HistoryNew

