import {AD_DETAILS_FOR_VENDOR_STATE , CITIES_COLLECTION , EXPIRE_AD_CHANGE , RENEW_AD_CHANGE ,
        EXPIRED_AD_DETAILS_FOR_VENDOR_STATE , REGISTER_AD_CHANGE} from '../ReduxConstants'
import firestore from "@react-native-firebase/firestore"
import moment from 'moment';

/**
 * Get the Add details for the vendor
 * @returns 
 */
 export  function getAddDetails(){
    return(dispatch)=>{
        return new Promise((resolve,reject) =>{
            let adRecords = [];
            firestore()
                .collection(CITIES_COLLECTION)
                .doc('asr')
                .collection('ads')
                .where("vendor.uid", "==", "klbjskO5UjAHrsZlbz6s")
                .get()
                .then((querySnapshot) =>{
                    querySnapshot.forEach((document) =>{
                        let documentData = document.data();
                        if(documentData.ad_status.status != "expired"){
                            if( documentData.ad_status.status === "active"){
                                let adDetails = {
                                    "id" : documentData.uid,
                                    "ad_status" : documentData.ad_status.status,
                                    "coupons_count" : documentData.stats.claims,
                                    "ad_image_url" : documentData.processed.img_url,
                                    "views" : documentData.stats.views,
                                    "expiredMessage" : buildExpiredMessage(documentData.timeline.request_date , documentData.timeline.expiry_date)
                                }
                                adRecords.push(adDetails)
                            } else{
                                let adDetails = {
                                    "id" : documentData.uid,
                                    "ad_status" : documentData.ad_status.status,
                                    "tagline" : documentData.raw.tagline,
                                    "requestedDate" : convertTimeStampToStandardDate(documentData.timeline.request_date)  
                                }
                                adRecords.push(adDetails)
                            }
                        }
                    });
                    dispatch({
                        type:AD_DETAILS_FOR_VENDOR_STATE,
                        "payload" : adRecords
                    });
                    return resolve(adRecords);
                }).catch((err)=>{
                    console.log("Error throw"+err)
                    return reject(err);
                })
        })
        
    }
};

/**
 * Get the Add which are expired
 * @returns 
 */
 export  function getExpiredAddDetails(){
    return(dispatch)=>{
        return new Promise((resolve,reject) =>{
            let adRecords = [];
            firestore()
                .collection(CITIES_COLLECTION)
                .doc('asr')
                .collection('ads')
                .where("vendor.uid", "==", "klbjskO5UjAHrsZlbz6s")
                .get()
                .then((querySnapshot) =>{
                    querySnapshot.forEach((document) =>{
                        let documentData = document.data();
                        if(documentData.ad_status.status == "expired"){
                            let adDetails = {
                                "id" : documentData.uid,
                                "ad_status" : documentData.ad_status.status,
                                "coupons_count" : documentData.stats.claims,
                                "ad_image_url" : documentData.processed.img_url,
                                "views" : documentData.stats.views,
                                "expiredMessage" : buildExpiredMessage(documentData.timeline.request_date , documentData.timeline.expiry_date)
                            }
                            adRecords.push(adDetails)
     
                        }
                    });
                    dispatch({
                        type:EXPIRED_AD_DETAILS_FOR_VENDOR_STATE,
                        "payload" : adRecords
                    });
                    return resolve(adRecords);
                }).catch((err)=>{
                    console.log("Error throw"+err)
                    return reject(err);
                })
        })
        
    }
};

/**
 * Register Ads in the firebase
 * Note :- Currently vendorObject hardcode working on creating a builderclass
 * @param {} inputUserDetailsObject 
 * @returns 
 */
 export  const registerAds =  inputAdsDetailsObject => async dispatch =>{

    try{
        console.log("Input User Object",JSON.stringify(inputAdsDetailsObject))
        let documentResponse = await firestore()
            .collection(CITIES_COLLECTION)
            .doc('asr')
            .collection('ads')
            .doc();
        let documentId = documentResponse.id;
        let addReferenceObject = await firestore()
            .collection(CITIES_COLLECTION)
            .doc('asr')
            .collection('ads')
            .doc(documentId)
            .update({
                processed: {
                    img_url: inputAdsDetailsObject.imgUrl,
                    tagline: inputAdsDetailsObject.tagline
                } ,
                uid : documentId,
                timeline : {
                    request_date : new Date()
                },
                vendor : {
                    uuid : inputAdsDetailsObject.vendorId
                },
                gallery : inputAdsDetailsObject.galleryList
            })
        dispatch({
                type:REGISTER_AD_CHANGE,
                "payload" : documentId
        });
        return documentId
    } catch(err){
        console.error("Error is"+err)
    }
};

/**
 * Expire Ads in the firebase
 * Note :- Currently vendorObject hardcode working on creating a builderclass
 * @param {} inputUserDetailsObject 
 * @returns 
 */
 export  const expireAd =  inputAdsDetailsObject => async dispatch =>{

    try{
        console.log("Input User Object",JSON.stringify(inputAdsDetailsObject))
        let addReferenceObject = await firestore()
            .collection(CITIES_COLLECTION)
            .doc('asr')
            .collection('ads')
            .doc(inputAdsDetailsObject.adId)
            .update({
                ad_status: {
                    status: "expired"
                } ,
                timeline : {
                    expiry_date : new Date()
                }
            })
        dispatch({
                type:EXPIRE_AD_CHANGE,
                "payload" : documentId
        });
        return documentId
    } catch(err){
        console.error("Error is"+err)
    }
};


/**
 * Renew Ads Ads in the firebase
 * Note :- Currently vendorObject hardcode working on creating a builderclass
 * @param {} inputUserDetailsObject 
 * @returns 
 */
 export  const renewAd =  inputAdsDetailsObject => async dispatch =>{

    try{
        console.log("Input User Object",JSON.stringify(inputAdsDetailsObject))
        let addReferenceObject = await firestore()
            .collection(CITIES_COLLECTION)
            .doc('asr')
            .collection('ads')
            .doc(inputAdsDetailsObject.adId)
            .update({
                ad_status: {
                    status: "active"
                } ,
                timeline : {
                    expiry_date : inputAdsDetailsObject.expiryDate
                }
            })
        dispatch({
                type:RENEW_AD_CHANGE,
                "payload" : documentId
        });
        return documentId
    } catch(err){
        console.error("Error is"+err)
    }
};

function buildExpiredMessage(requestedDate , expiryDate){
    let startDate = moment(requestedDate.toDate());
    let endDate = moment(expiryDate.toDate());
    let diff = endDate.diff(startDate)
    let diffDuration = moment.duration(diff)
    let daysDiff = diffDuration.days()
    return "Expired in "+daysDiff+" days";
}

function convertTimeStampToStandardDate(timestampDate){
    return moment(timestampDate.toDate()).format('DD MMM, YYYY');
}

