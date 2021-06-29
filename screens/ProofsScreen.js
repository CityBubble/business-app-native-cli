import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import Proofstyles from '../styles/proofs'
import Header from '../components/Header'
import Checkbox from '../components/Checkbox'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper'
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../components/Button'


const ProofsScreen = ({ navigation }) => {
    const [image, setimage] = useState(null)
    const pickImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
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

    const UploadButton = () => {
        if (image === null) {
            return (
                <View style={Proofstyles.buttonContainer}>
                    <TouchableOpacity style={Proofstyles.cardButton} onPress={pickImage}>
                        <Text style={Proofstyles.cardButtonText}>Upload Logo </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Proofstyles.cardButtonCamera} onPress={clickImage}>
                        <Text style={Proofstyles.cardButtonText}>open camera</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else {
            return (

                <View style={Proofstyles.buttonContainer}>
                    <TouchableOpacity style={Proofstyles.cardButton} onPress={pickImage}>
                        <Text style={Proofstyles.cardButtonText}>Re-Upload</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Proofstyles.buttonDelete}>
                        <Text style={Proofstyles.buttonText} onPress={Delete}>Remove</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }


    return (

        <SafeAreaView style={Proofstyles.proofsContainer}>

            <View>
                <Header
                    onPress={() => navigation.navigate('Personal_info')}
                />
            </View>
            <View style={Proofstyles.proofsContainerInput}>

                <View style={Proofstyles.checkboxContainer}>
                    <Text style={Proofstyles.checkboxLabel}>Allow us to show your current location as your store location to the customers</Text>
                    <Checkbox />
                </View>
                <View style={Proofstyles.inputContainerLogo}>

                    <Card.Cover source={{ uri: image ? image : 'https://cdn.ptml.in/public/images/default/default-logo.png' }} style={Proofstyles.imageUpload} />
                    <Card style={Proofstyles.cardsUploads}>
                        <Card.Content style={Proofstyles.contentCard}>
                            <Text style={Proofstyles.cardText}>{image ? "Logo uploaded successfully" : "Upload business logo"}</Text>

                        </Card.Content>
                        <Card.Actions style={{ justifyContent: 'center' }}>
                            {UploadButton()}
                        </Card.Actions>
                    </Card>
                </View>
                <View style={Proofstyles.button}>

                    <Button
                        title="Register"
                        onPress={() => navigation.navigate('waitingScreen')}
                    />
                </View>
            </View>
        </SafeAreaView>


    )
}

export default ProofsScreen

const styles = StyleSheet.create({})
