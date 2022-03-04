import axios from 'axios'

//job list
export const fetchJobData = () => async (dispatch) =>{
    const res= await axios.get(`${process.env.REACT_APP_BASE_URL}admin/joblist`)
    dispatch({
        type:"FETCH_JOBS",
        payload:res.data.response 
    })
}   
export const deleteJob=(id)=>async(dispatch)=>{
    console.log(id);

    try{
        const res=await axios.patch(`${process.env.REACT_APP_BASE_URL}admin/deletejob?id=${id}`,null,{ withCredentials:true})
        dispatch({
            type:"DELETE-JOB",
            payload:id
        })

    }catch(e){
        console.log(e);
    }

}

