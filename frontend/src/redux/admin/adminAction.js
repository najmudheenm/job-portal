import axios from "axios";

//admin login
export const setCurrentAdmin = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_LOGIN_URL}`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    console.log(response);
    if (response.status == 200) {
      dispatch({
        type: "SET_CURRENT_ADMIN",
        payload: response.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const Logout =()=>async(dispatch)=>{
  try{
    await axios.get(`${process.env.REACT_APP_BASE_URL}admin/logout`,{withCredentials: true})
    dispatch({
      type:'LOGOUT'
    })
  }
  catch(err){
    console.log(err);
  }
  
}
