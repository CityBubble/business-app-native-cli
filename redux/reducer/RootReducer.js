import { combineReducers } from 'redux'
import RegisterReducer from './RegisterUserReducer';
import StorageReducer from './StorageReducer'
import VendorAdsReducer from './VendorAdsReducer';

/**
 * Collating the reducers together
 */
const RootReducer = combineReducers({
    regsiter: RegisterReducer,
    storage : StorageReducer,
    vendorAds : VendorAdsReducer
})

export default RootReducer;