const initState ={
    data : null,
}

import {AD_DETAILS_FOR_VENDOR_STATE} from '../ReduxConstants'

/**
 * Reducer for Firebase Actions 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const VendorAdsReducer = (state = initState,action)=>{
    switch(action.type){
        case AD_DETAILS_FOR_VENDOR_STATE:
            console.log('vendor ads details fetched',action)
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export default VendorAdsReducer;