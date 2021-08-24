import {AD_DETAILS_FOR_VENDOR_STATE , CITIES_COLLECTION , CITY_CODES_MAP} from '../ReduxConstants'
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
                                    "ad_id" : documentData.uid,
                                    "ad_status" : documentData.ad_status.status,
                                    "coupons_count" : documentData.stats.claims,
                                    "ad_image_url" : documentData.processed.img_url,
                                    "views" : documentData.stats.views,
                                    "expiredMessage" : buildExpiredMessage(documentData.timeline.request_date , documentData.timeline.expiry_date)
                                }
                                adRecords.push(adDetails)
                            } else{
                                let adDetails = {
                                    "ad_id" : documentData.uid,
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

