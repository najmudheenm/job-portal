import {combineReducers} from 'redux'


//reducer
import adminReducer from './admin/adminReducer'


const rootReducer = combineReducers({
   user:adminReducer
})

export default rootReducer