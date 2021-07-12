import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import Entypo from 'react-native-vector-icons/Entypo';

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
                    <TouchableOpacity style={{alignItems:'flex-end',top:15,right:20}} onPress={props.onPress}>
                        <Entypo name="circle-with-cross" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Image source={require('../../assets/ads/refresh.png')} style={{ width: 40, height: 45, left: 142 }} />
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

const styles = StyleSheet.create({
    RefreshModalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    RefreshModalAlert: {
        width: 350,
        height: 290,
        backgroundColor: '#262626',
        borderRadius: 20,
        elevation: 20
    },
    RefreshModalText: {
        top: 10,
        alignItems: 'center'
     },

    RefreshModalHeading: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '800'
    },
    RefreshModalPara: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        padding: 12
    },
    btnCalender: {
        top: 20,
        alignItems: 'center'
    },
    calenderStyles: {
        backgroundColor: '#000',
        borderRadius: 12,
        width: 200,
        height: 43,
        alignItems: "center"

    },
    calenderText: {
        color: '#fff',
        marginTop: 12
    },
    btnView: {
        top: 40,
        alignItems: 'center'
    },
    buttonStyles: {
        backgroundColor: '#4852ff',
        padding: 8,
        width: 106,
        alignItems: 'center',
        borderRadius: 12,

    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    }

})
