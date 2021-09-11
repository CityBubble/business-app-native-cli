import {REGISTER_APP_CHANGE , UPLOAD_USER_IMAGE , QUERY_VENDOR_NUMBER , VENDOR_COLLECTION , QUERY_VENDOR_PROFILE_STATUS , CITIES_COLLECTION , CITY_CODES_MAP} from '../ReduxConstants'
import firestore from "@react-native-firebase/firestore"

/**
 * Register user in the firebase
 * Note :- Currently vendorObject hardcode working on creating a builderclass
 * @param {} inputUserDetailsObject 
 * @returns 
 */
export  const registerUser =  inputUserDetailsObject => async dispatch =>{

    try{
        console.log("Input User Object",JSON.stringify(inputUserDetailsObject))
        let documentResponse = await firestore()
            .collection(VENDOR_COLLECTION)
            .add({
                name:inputUserDetailsObject.BusinessName ,
                contact : inputUserDetailsObject.PhoneNumber,
                category : inputUserDetailsObject.BusinessSubCategory ,
                profile_status : "queued"
            });
        let documentId = documentResponse.id;
        let addReferenceObject = await firestore()
            .collection(VENDOR_COLLECTION)
            .doc(documentId)
            .update({
                address: {
                    area: inputUserDetailsObject.AreaName,
                    pincode: inputUserDetailsObject.PinCode,
                    full_address: inputUserDetailsObject.FullAddress
                } ,
                uid : documentId,

                timeline : {
                    request_date : new Date()
                }
            
            })
        dispatch({
                type:REGISTER_APP_CHANGE,
                "payload" : documentId
        });
        return documentId
    } catch(err){
        console.error("Error is"+err)
    }
};

/**
 * Add Image for user 
 * This class will be use to add/update images published by the user
 * @param {} imageUri 
 * @param {*} docId 
 * @returns 
 */
export  function addUserImage(imageUri,docId){
    return(dispatch)=>{
        return new Promise((resolve,reject) =>{
            firestore()
                .collection(VENDOR_COLLECTION)
                .doc(docId)
                .update({
                   logo_url : imageUri
                }).then(()=>{
                    console.log('Log URI upload'+imageUri)
                    dispatch({
                        type:UPLOAD_USER_IMAGE,
                        "payload" : "_SUCCESS"
                    });
                    return resolve("_SUCCESS");
                }).catch((err)=>{
                    console.log("Error throw"+err)
                    return reject(err);
                })
        })
        
    }
};


/**
 * Check if the PhoneNumber exists in the database
 * @param {} phoneNumber 
 * @returns 
 */
 export  function checkIfPhoneNumberExistsInFirestore(phoneNumber,city){
    return(dispatch)=>{
        return new Promise((resolve,reject) =>{
            console.log("phone number" + phoneNumber.toString())
            console.log("City Code"+CITY_CODES_MAP[city])
            firestore()
                .collection(CITIES_COLLECTION)
                .doc(CITY_CODES_MAP[city])
                .collection(VENDOR_COLLECTION)
                .where("contact", "==", phoneNumber.toString())
                .get()
                .then((querySnapshot) =>{
                    dispatch({
                        type:QUERY_VENDOR_NUMBER,
                        "payload" : querySnapshot.empty
                    });
                    return resolve(querySnapshot.empty);
                }).catch((err)=>{
                    console.log("Error throw"+err)
                    return reject(err);
                })
        })
        
    }
};

/**
 *   Returns the Review State of the Vendor
 * @param {*} phoneNumber 
 * @returns 
 */
 export  function getReviewStateOfVendor(documentId){
    return(dispatch)=>{
        return new Promise((resolve,reject) =>{
            firestore()
                .collection(VENDOR_COLLECTION)
                .doc(documentId)
                .get()
                .then((querySnapshot) =>{
                    let documentData = querySnapshot.data()
                    let profile_status = documentData.profile_status
                    dispatch({
                        type:QUERY_VENDOR_PROFILE_STATUS,
                        "payload" : profile_status
                    });
                    return resolve(profile_status);
                }).catch((err)=>{
                    console.log("Error throw"+err)
                    return reject(err);
                })
        })
        
    }
};