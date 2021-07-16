import React from 'react'
import { StyleSheet, Text, View,Modal,Image,TouchableOpacity } from 'react-native'
import styles from '../../styles/alert/stopStyle'
const StopModal = (props) => {
   
    return (
       
            <Modal transparent visible={props.Visible}>
                <View style={styles.stopModalBackground}>
                    <View style={styles.stopModalAlert}>
                        <Image source={require('../../assets/ads/stop.png')} style={{width:40,height:45,left:135,}} />
                        <View style={styles.stopModalText}>
                            <Text style={styles.stopModalHeading}>Stop Ad</Text>
                            <Text style={styles.stopModalPara} >Are you sure you want to stop the ad?</Text>
                        </View>
                        <View style={styles.stopModalButton} >
                            <TouchableOpacity style={styles.btnNo} onPress={props.noPress}>
                                <Text style={styles.stopBtnNo}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnYes} onPress={props.yesPress}>
                                <Text style={styles.stopBtnYes}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
     
    )
}

export default StopModal

