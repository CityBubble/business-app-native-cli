import AsyncStorage from '@react-native-async-storage/async-storage';

import { IS_VENDOR_ONBOARDING_COMPLETED_KEY , VENDOR_DETAILS_KEY , 
    INITIALISE_STATE , ADD_UPDATE_VENDOR_DETAILS_STATE } from  '../ReduxConstants'


const FALSE_PARAM = false;
const TRUE_PARAM = true;

/**
 * Initializing the Async State with onBoardingCompleted as false
 * This currently not helpful but maybe helpful in later stage .
 * @returns 
 */
export const initialiseState = () => async dispatch =>{
    try{
        let isOnboardingCompleted = await AsyncStorage.getItem(IS_VENDOR_ONBOARDING_COMPLETED_KEY)
        if (isOnboardingCompleted == null){
            isOnboardingCompleted = FALSE_PARAM.toString()
            await AsyncStorage.setItem(IS_VENDOR_ONBOARDING_COMPLETED_KEY,isOnboardingCompleted);
        } 
        dispatch({
            type : INITIALISE_STATE,
            payload : isOnboardingCompleted
        })
        return isOnboardingCompleted;
    } catch (err) {
        console.error('Error:' + err)
    }
}

/**
 * Add or Update the Mobile Number of the Vendor in Storage
 * @param {JSON} vendorMobileDetails 
 * @returns Action Payload
 */
export const addVendorDetails = vendorDetailsObject => async dispatch =>{
    let documentId;
    try{
        console.log("Vendor Detials" + JSON.stringify(vendorDetailsObject));
        await AsyncStorage.setItem(IS_VENDOR_ONBOARDING_COMPLETED_KEY,TRUE_PARAM.toString());
        await AsyncStorage.setItem(VENDOR_DETAILS_KEY, JSON.stringify(vendorDetailsObject));
        documentId = vendorDetailsObject.documentId;
        dispatch({
            type : ADD_UPDATE_VENDOR_DETAILS_STATE,
            payload : documentId
        })
        return documentId;
    } catch (err) {
        console.error('Error:' + err)
    }
}