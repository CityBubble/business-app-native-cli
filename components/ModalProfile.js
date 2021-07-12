import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View, Modal } from 'react-native'

const ModalProfile = (props) => {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <Modal transparent visible={props.visible}>
                <View style={styles.TextContainerStyle}>
                    <TouchableOpacity style={styles.ProfileContainer}>
                        <Text style={styles.Text}>Profile</Text>
                    </TouchableOpacity>
                    <Text style={styles.Underline}></Text>
                    <TouchableOpacity style={styles.ProfileContainer}>
                        <Text style={styles.Text}>Qr Code</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </TouchableWithoutFeedback>
    )
}

export default ModalProfile

const styles = StyleSheet.create({
TextContainerStyle:{
    flex:1,
    marginTop:69,
    alignItems:'flex-end',
    right:60,
    backgroundColor:'#20202A',
    width:200,
    height:10
}


})

