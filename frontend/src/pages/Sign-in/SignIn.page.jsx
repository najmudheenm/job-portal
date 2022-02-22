import "./SignIn.style.scss";
import { useState } from "react";
import axios from "axios";

//components
import FormInput from "../../components/Form-input/FormInput.component";
import CustomButton from "../../components/Custom-Button/CustomButton.component";

const SignInPage = ({ URL }) => {
  const [userData, setUserData] = useState([]);
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const signInSubmitHandler = async (e) => {
    e.preventDefault();
    const response = axios.post(``);
  };
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
