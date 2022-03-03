import axios from 'axios'

export const fetchJobData = () => async (dispatch) =>{
    console.log("hi");
    const res= await axios.get(`${process.env.REACT_APP_BASE_URL}admin/joblist`)
    dispatch({
        type:"FETCH_JOBS",
        payload:res.data.response 
    })

}   

