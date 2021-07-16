import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from '../../styles/alert/refreshStyles'

const RenewModal = (props) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [Date, setDate] = useState("")
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDate(moment(date).format(' Do MMMM  YYYY'))
        hideDatePicker();
    };
    return (
        <Modal transparent visible={props.Visible}>
            <View style={styles.RefreshModalBackground}>
                <View style={styles.RefreshModalAlert}>
                    <TouchableOpacity style={styles.cross} onPress={props.onPress}>
                        <Entypo name="circle-with-cross" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Image source={require('../../assets/ads/refresh.png')} style={styles.imageStyles} />
                    <View style={styles.RefreshModalText}>
                        <Text style={styles.RefreshModalHeading}>Renew Ad</Text>
                        <Text style={styles.RefreshModalPara} >Pick the date upto which you want to extend your ad</Text>
                    </View>
                    <View style={styles.btnCalender}>
                        <TouchableOpacity style={styles.calenderStyles} onPress={showDatePicker}>
                            <Text style={styles.calenderText}>{Date}</Text>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.buttonStyles} >
                            <Text style={styles.btnText}>Renew</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default RenewModal

