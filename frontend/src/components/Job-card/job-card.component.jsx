import "./job-card.styles.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

//components
import CustomButton from "../custom-button/custom-button.component";

const JobContainer = ({ children, ...otherprops }) => {
  const navigate = useNavigate();

  const { id = 1, title, shortDiscription, experience } = otherprops;
  const user = useSelector((state) => state.user.Token);
  const [footerToggle, setFooterToggle] = useState(false);

  //pop up resume uploading card
  const footerToggleHandler = () => {
    setFooterToggle(true);
  };

  //navigate specific job page
  const navigateJobDetails = () => {
    navigate(`careers/${id}`);
  };
  return (
    <article className="job-card">
      <div className="header">
        <h1>{title}</h1>
      </div>
      <div className="content" onClick={navigateJobDetails}>
        <p className="short-discription">{shortDiscription}</p>
      </div>
      <CustomButton className="toggle-button" onClick={footerToggleHandler}>
        Apply
      </CustomButton>
      <footer className="footer"></footer>
    </article>
  );
};

export default JobContainer;
