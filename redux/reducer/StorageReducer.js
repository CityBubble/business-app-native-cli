const initialState = {
    isOnboardingCompleted : null
}

import {INITIALISE_STATE, ADD_UPDATE_VENDOR_DETAILS_STATE} from '../ReduxConstants'

/**
 * Reducer maintaining the Async storage actions
 * @param {} state 
 * @param {*} action 
 * @returns 
 */
const StorageReducer = (state = initialState,action)=>{
    switch(action.type){
        case INITIALISE_STATE:
            console.log('store initialized',action)
            return {
                ...state,
                data: action.payload
            };
        case ADD_UPDATE_VENDOR_DETAILS_STATE:
            console.log('add or update vendor mobile number',action)
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export default StorageReducer;