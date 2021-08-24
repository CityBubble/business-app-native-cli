import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image , ActivityIndicator } from 'react-native'
import Proofstyles from '../../styles/proofs'
import Header from '../../components/Header'
import Checkbox from '../../components/Checkbox'
import { Card } from 'react-native-paper'
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../../components/Button'
import storage  from '@react-native-firebase/storage'
import {connect} from 'react-redux';
import {registerUser, addUserImage} from '../../redux/actions/RegisterUserActions';
import {addVendorDetails} from '../../redux/actions/StorageActions';


const ProofsScreen = (props) => {
    const {navigation , route} =props
    const [image, setimage] = useState(null)
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
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


    const createUser =async () =>{
        let inputUserDetails ={
            ...route.params
        }
       try{
            let documentResponse= await props.registerUser(inputUserDetails);
            console.log("Document Response" + documentResponse)
            let strageResponse = await props.addVendorDetails({
                phoneNumber : inputUserDetails.PhoneNumber,
                documentId : documentResponse
            })
            return documentResponse
        } catch(error){
            console.error("Error is" + error);
        }
        
    }

    const uploadImage =async() =>{
        const uri=image
        console.log("Image Uri is"+image)
        setUploading(true);
        let documentId= await createUser();
        console.log("Result is"+documentId);
        if(image === null){
            console.log("Image is null , direct navigate")
            setTransferred(100);
            navigation.navigate('waitingScreen' , {StateKey : 1})  
        } else {
            const childPath =  `post/${documentId}/${Math.random().toString(36)}`;
            console.log("Image Path :- "+childPath);
            console.log(childPath)
            const response = await fetch(uri);
            const blob = await response.blob();
            const task = storage()
                .ref()
                .child(childPath)
                .put(blob);
            const taskProgress = snapshot => {
                console.log(`transferred: ${snapshot.bytesTransferred}`)
                setTransferred(Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            }
    
            const taskCompleted = () => {
                task.snapshot.ref.getDownloadURL().then((snapshot) => {
                    console.log("Snapshot is"+snapshot);
                    props.addUserImage(snapshot,documentId)
                    navigation.navigate('waitingScreen' , {StateKey : 1})
                })
            }
    
            const taskError = snapshot => {
                console.error(snapshot)
            }
            task.on("state_changed", taskProgress, taskError, taskCompleted);
        }
    }

    const UploadButton = () => {
        if (image === null) {
            return (
                <View style={Proofstyles.buttonContainer}>
                    <TouchableOpacity style={Proofstyles.cardButton} onPress={pickImage}>
                        <Text style={Proofstyles.cardButtonText}> Open Gallery </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Proofstyles.cardButtonCamera} onPress={clickImage}>
                        <Text style={Proofstyles.cardButtonText}>Open Camera</Text>
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


                {uploading ? (
                            <View>
                                <Text style={testStyles.innerText}>{transferred} % Completed!</Text>
                                <ActivityIndicator size="large" color="#0000ff" />
                            </View>
                        ) : (
                        <Button
                            title="Register"
                            onPress={()=>uploadImage()}/>
                )}
                </View>
            </View>
        </SafeAreaView>


    )
}

const testStyles = StyleSheet.create({
    innerText: {
      color: 'blue',
      fontWeight: 'bold'
    }
  });
const mapDispatchToProps =(dispatch)=>{
    return{
        registerUser:(regsiterData) => dispatch(registerUser(regsiterData)),
        addUserImage : (imageUri , documentId) => dispatch(addUserImage(imageUri,documentId)),
        addVendorDetails : (vendorDetailsObject) => dispatch(addVendorDetails(vendorDetailsObject))
    }
}

export default connect(null,mapDispatchToProps)(ProofsScreen);
