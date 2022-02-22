import axios from 'axios'

export const loadJobs = () => async (dispatch) =>{
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/admin/joblist`)
    return response
}