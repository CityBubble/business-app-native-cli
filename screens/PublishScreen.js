import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-shadow-cards'
import Inputbox from '../components/Inputbox'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ImagePicker from 'react-native-image-crop-picker';
import PublishAdModal from '../components/warning/publishAdModal';

const PublishScreen = ({navigation}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [Date, setDate] = useState("")
    const [image, setimage] = useState(null)
    const[show,setShow]=useState(false)
    const pickImage = () => {
        ImagePicker.openPicker({
            multiple: true,
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setimage(image.path)
        });
    }

    const clickImage = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setimage(image.path)

        });
    }
    const Delete = () => {
        setimage(null)

    }
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
        <View style={styles.publishContainer}>
            <View style={styles.inputContainerInput}>
                <View style={styles.registerTitleImage}>
                    <Image source={require(`../assets/PublishAd/tag.png`)} style={{ width: 25, height: 25 }} />
                    <Text style={styles.registerLabel}> Tag Line</Text>
                </View>
                <Card style={styles.Cards}>
                    <View style={styles.registerTextImage}>

                        <Inputbox
                            Title="Eg Buy 2 Get 1 Free"
                        />
                    </View>
                </Card>
            </View>
            <View style={styles.inputContainerInput}>
                <View style={styles.registerTitleImage}>
                    <Image source={require(`../assets/PublishAd/upload.png`)} style={{ width: 25, height: 25 }} />
                    <Text style={styles.registerLabel}> Description</Text>
                </View>
                <Card style={styles.CardsDiscription}>
                    <View style={styles.registerTextImage}>

                        <Inputbox
                            Title="Eg The offer is available for shoes...."
                        />
                    </View>
                </Card>
            </View>
            <View style={styles.inputContainerInput}>
                <View style={styles.registerTitleImage}>
                    <Image source={require(`../assets/PublishAd/calender.png`)} style={{ width: 25, height: 25 }} />
                    <Text style={styles.registerLabel}> Valid till </Text>
                    <Text style={styles.registerSub}>(within subscription period)</Text>
                </View>
                <Card style={styles.CardsCalender}>
                    <View style={styles.registerTextImage}>

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
                </Card>
            </View>
            <View style={styles.inputContainerInput}>
                <View style={styles.registerTitleImage}>
                    <Image source={require(`../assets/PublishAd/Gallery.png`)} style={{ width: 25, height: 25 }} />
                    <Text style={styles.registerLabel}> Gallery </Text>
                    <Text style={styles.registerSub}>(Max 3)</Text>
                </View>
                <TouchableOpacity>

                    <View style={styles.uploadImage}>
                        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
                        <FontAwesome5 name="cloud-upload-alt" size={54} color="#fff"  />
                        <Text style={styles.uploadText}>Tap to upload</Text>
                        </TouchableOpacity>
                    </View>

                </TouchableOpacity>

            </View>
            <View style={styles.BtnContainer}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>setShow(true)}>
                    <Text style={styles.btnText}>Publish</Text>
                </TouchableOpacity>
                <PublishAdModal
                Visible={show}
                Navigation={()=>setShow(false)}
                />
            </View>
        </View>
    )
}

export default PublishScreen

const styles = StyleSheet.create({
    publishContainer: {
        flex: 1,
        backgroundColor: '#14161d',
    },
    inputContainerInput: {
        marginTop: 25,
        left: 20,
        paddingTop: 18

    },
    Cards: {
        backgroundColor: '#000',
        borderRadius: 12,
        alignItems: 'center'

    },
    secondCard: {
        backgroundColor: '#000',
        borderRadius: 12,
        height: 77
    },

    registerLabel: {
        left: 10,
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
        color: '#fff',

    },
    registerTextImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    uploadImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        right: 50
    },
    registerTitleImage: {
        flexDirection: 'row',
        left: 10
    },
    registerScreenInput: {
        alignItems: 'center',
    },
    CardsDiscription: {
        backgroundColor: '#000',
        borderRadius: 12,
        height: 105
    },
    calenderStyles: {
        backgroundColor: '#000',
        borderRadius: 12,
        width: 200,
        height: 43,
        alignItems: "center"

    },
    CardsUpload: {
        backgroundColor: '#000',
        borderRadius: 12,
        width: 300,
        height: 43,
        alignItems: "center"

    },
    calenderText: {
        color: '#fff',
        marginTop: 12
    },
    CardsCalender: {
        backgroundColor: '#000',
        borderRadius: 12,
        height: 39,
        width: 136,
        left: 30
    },
    registerSub: {
        color: '#C6C6C7',
        left: 25
    },
    uploadButton:{
        width:196,
        height:112,
        borderWidth:1,
        borderColor:'#fff',
        alignItems:'center',
        borderRadius:22,
        padding:12,
        right:35
    },
    uploadText:{
        top:10,
        color:'#fff',
    },
    BtnContainer:{
        top:30,
        alignItems:'center'
    },
    btnStyle:{
        backgroundColor:'#4852ff',
        padding:12,
        width:202,
        alignItems:'center',
        borderRadius:19
    },
    btnText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'600'
    }

})
