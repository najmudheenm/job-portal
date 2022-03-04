import "./SignIn.style.scss";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
//components
import FormInput from "../../components/Form-input/FormInput.component";
import CustomButton from "../../components/Custom-Button/CustomButton.component";

//redux
import {useDispatch,useSelector} from "react-redux"
import {setCurrentAdmin} from '../../redux/admin/adminAction'

const SignInPage = ({ URL }) => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user =useSelector(user=>user.admin)
  
  const [userData, setUserData] = useState([]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const signInSubmitHandler = async (e) => {
    e.preventDefault();

    dispatch(setCurrentAdmin(userData.email,userData.password))
   
  };

  useEffect(() => {
    if(user.email.length){
      navigate(-1)
    }
  },[user])
  
  return (
    <div className="sign-page">
      <form onSubmit={signInSubmitHandler} className="login-form-container">
        <header>LOGIN</header>
        <fieldset>
          <div className="input-wrapper">
            <FormInput
              onChange={inputChangeHandler}
              type="text"
              name="email"
              placeholder="your@email.com"
            />
          </div>
          <div className="input-wrapper">
            <FormInput
              onChange={inputChangeHandler}
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          <CustomButton id="continue" type="submit">
            CONTINUE
          </CustomButton>
        </fieldset>
      </form>
    </div>
  );
};

export default SignInPage;
