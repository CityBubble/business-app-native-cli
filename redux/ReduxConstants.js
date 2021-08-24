/**
 * Firebase Collection Constants
 */
export const VENDOR_COLLECTION = 'vendors'
export const CITIES_COLLECTION = 'cities'



/**
 * State Actions
 */
export const REGISTER_APP_CHANGE = 'REGISTER_APP_CHANGE'
export const UPLOAD_USER_IMAGE = 'UPLOAD_USER_IMAGE'
export const QUERY_VENDOR_NUMBER = 'QUERY_VENDOR_NUMBER'
export const QUERY_VENDOR_PROFILE_STATUS = 'QUERY_VENDOR_PROFILE_STATUS'
export const INITIALISE_STATE = 'INITIALISE_STATE'
export const ADD_UPDATE_VENDOR_DETAILS_STATE = 'ADD_UPDATE_VENDOR_DETAILS_STATE'
export const AD_DETAILS_FOR_VENDOR_STATE = 'AD_DETAILS_FOR_VENDOR_STATE'

/**
 * Async Storage Key
 */
export const DOCUMENT_ID_KEY = '@vendorDocumentId'
export const VENDOR_DETAILS_KEY = '@vendorDetails'
export const IS_VENDOR_ONBOARDING_COMPLETED_KEY = '@isOnboardingCompleted'


/***
 * City Cody and its corresponding city code map
 */

export const CITY_CODES_MAP = {
    'Amritsar' : 'asr',
    'Chandigarh' : 'chd'
};