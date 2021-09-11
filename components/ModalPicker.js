import React from 'react'
import { Dimensions } from 'react-native';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import modalPickerStyles from '../styles/componentStyles/ModalPicker'

const OPTIONS = ['Amritsar','Chandigarh','Delhi','Chennai','Jaipur']
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const ModalPicker = (props) => {
    const onPressItem = (option) => {
        props.chooseModalVisibility(false);
        props.setchooseCity(option)
    }

    const option = OPTIONS.map((item, index) => {
        return (
            <TouchableOpacity
                style={modalPickerStyles.option}
                key={index}
                onPress={() => onPressItem(item)}>
                <Text style={modalPickerStyles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })


    return (
        <TouchableOpacity
            onPress={() => props.chooseModalVisibility(false)}
            style={modalPickerStyles.modalPickerContainer}>
            <View style={[modalPickerStyles.modal, { width: WIDTH - 30, height: HEIGHT / 3 }]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

export default ModalPicker

