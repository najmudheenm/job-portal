import {deleteJob} from './jobsUtill'

const INITIAL_STATE={
    jobs:{}
}


const jobReducer=(state= INITIAL_STATE,action)=>{
    switch (action.type){
        case 'FETCH_JOBS':
            return ({...state,jobs:action.payload})

        case 'DELETE-JOB':
            return({...state,jobs:deleteJob(state.jobs,action.payload)})
            
        default: 
            return state
    }
}

export default jobReducer