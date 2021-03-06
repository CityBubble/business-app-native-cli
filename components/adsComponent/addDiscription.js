import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Card } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from '../../styles/componentStyles/addDiscriptionStyles'

const AddDiscription = (props) => {
    return (
        <Card style={styles.cardStyle}>
            <Card.Cover source={{uri : props.ImageUrl}} />
            <Card.Actions style={styles.cardAdd}>
                <View style={styles.Validity}>
                    <Text style={styles.state}>Active</Text>
                    <Text style={styles.Date}>{props.date}</Text>
                </View>
                <View style={styles.secondHalf}>
                    <View style={styles.CalenderTicket}>
                        <FontAwesome name="ticket" size={18} color="#fff" style={styles.Icon} />
                        <Text style={styles.ticket}>{props.ticket}</Text>
                    </View>
                    <View style={styles.Calender}>
                        <FontAwesome name="eye" size={18} color="#fff" style={styles.Icon} />
                        <Text style={styles.Views}>{props.Views}</Text>
                    </View>
                </View>
            </Card.Actions>
        </Card>
    )
}

export default AddDiscription


