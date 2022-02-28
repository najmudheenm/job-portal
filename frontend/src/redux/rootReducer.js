import {combineReducers} from 'redux'


//reducer
import adminReducer from './admin/adminReducer'
import jobsReducer from './jobs/jobsReducer'


const rootReducer = combineReducers({
   user:adminReducer,
   jobs:jobsReducer,
})

export default rootReducer