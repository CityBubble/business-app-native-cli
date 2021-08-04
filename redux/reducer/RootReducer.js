import { combineReducers } from 'redux'
import RegisterReducer from './RegisterUserReducer';
import StorageReducer from './StorageReducer'

/**
 * Collating the reducers together
 */
const RootReducer = combineReducers({
    regsiter: RegisterReducer,
    storage : StorageReducer 
})

export default RootReducer;