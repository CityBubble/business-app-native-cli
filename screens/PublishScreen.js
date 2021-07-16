import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-shadow-cards'
import Inputbox from '../components/Inputbox'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ImagePicker from 'react-native-image-crop-picker';
import PublishAdModal from '../components/warning/publishAdModal';
import styles from '../styles/publishStyle';

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

