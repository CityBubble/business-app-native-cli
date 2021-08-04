const initState ={
    data : null,
}

import {REGISTER_APP_CHANGE , UPLOAD_USER_IMAGE , QUERY_VENDOR_NUMBER , QUERY_VENDOR_PROFILE_STATUS} from '../ReduxConstants'

/**
 * Reducer for Firebase Actions 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const RegisterReducer = (state = initState,action)=>{
    switch(action.type){
        case REGISTER_APP_CHANGE:
            console.log('vendor register in the add',action)
            return {
                ...state,
                data: action.payload
            };
        case UPLOAD_USER_IMAGE:
            console.log('vendor register in the add',action)
            return {
                ...state,
                data : action.payload
            };
        case QUERY_VENDOR_NUMBER:
            console.log('vendor register in the add',action)
            return {
                ...state,
            };
        case QUERY_VENDOR_PROFILE_STATUS:
            console.log('vendor profile status' , action)
            return {
                ...state,
                data : action.payload
            }
        default:
            return state;
    }
}

export default RegisterReducer;