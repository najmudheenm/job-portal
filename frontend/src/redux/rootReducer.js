import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//reducer
import adminReducer from './admin/adminReducer'
import jobsReducer from './jobs/jobsReducer'

const persistConfig={
   key:'root',
   storage,
   whitelist:['admin']    
}

const rootReducer = combineReducers({
   admin:adminReducer,
   jobs:jobsReducer,
})

export default  persistReducer(persistConfig,rootReducer)