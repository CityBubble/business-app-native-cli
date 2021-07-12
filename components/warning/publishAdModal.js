import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,Modal } from 'react-native'

const PublishAdModal = (props) => {
    return (
        <Modal transparent visible={props.Visible}>
            <View style={styles.RefreshModalBackground}>
                <View style={styles.RefreshModalAlert}>

                    <Image source={require('../../assets/PublishAd/tick.png')} style={{ width: 110, height: 115, left: 119 }} />
                    <View style={styles.RefreshModalText}>
                        <Text style={styles.RefreshModalHeading}>Congratualtions</Text>
                        <Text style={styles.RefreshModalPara} >Your first ad request has been successfully recieved</Text>
                    </View>

                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.buttonStyles} onPress={props.Navigation} >
                            <Text style={styles.btnText}>View your ad status on Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default PublishAdModal

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
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 20,
        elevation: 20
    },
    RefreshModalText: {
        top: 30,
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
    btnView: {
        top: 45,
        alignItems: 'center'
    },
    buttonStyles: {
    alignItems: 'center',
    },
    btnText: {
        color: '#30D582',
        fontSize: 16,
        fontWeight: '700',
        width:250,
        textAlign:'center'
    }
})
