import "./JobCard.styles.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../icon/location.svg";

import { useSelector } from "react-redux";
import { Popover, Button } from "antd";

//components
import CustomButton from "../Custom-Button/CustomButton.component";

import { Card } from "antd";
import ResumeUploadform from "../resume-upload-form/ResumeUploadForm.component";

const JobContainer = ({ children, ...otherprops }) => {
  const [popUp, setPopUp] = useState(false)
  const navigate = useNavigate();
console.log(otherprops);
  const [resumeUploadPopUp, setResumeUploadPopUp] = useState(false);

  // //pop up resume uploading card


  const handleVisibleChange = () => {
  setPopUp(!popUp);
  };

  //navigate specific job page
  const navigateJobDetails = () => {
    navigate(_id, {
      state: { ...otherprops },
    });
  };

  const {
    _id,
    jobTitle,
    shortDescription,
    skill,
    experience,
    type,
    workLocation,
  } = otherprops.job;
  console.log(otherprops);
  return (
    <div className="job-card">
      <div className="job-card-header"></div>
      <div className="job-card-title"> {jobTitle}</div>
      <div className="job-card-subtitle">
        {shortDescription}
        <span onClick={navigateJobDetails}>Read More ...</span>
      </div>
      <div className="job-detail-buttons">
        <button className="search-buttons detail-button">
          Exp : {experience}
        </button>
        <button className="search-buttons detail-button">
          Job Type : {type}
        </button>
        <button className="search-buttons detail-button">
          <span>
            <Logo />
          </span>
          {workLocation}
        </button>
      </div>
      <div className="job-detail-buttons">
        <button className="search-buttons detail-button">
          Skills : {skill}
        </button>
      </div>

      <Popover
        content={<ResumeUploadform onClick={handleVisibleChange} />}
        title={jobTitle}
        trigger="click"
        visible={popUp}
        onVisibleChange={handleVisibleChange}
      >
        <div className="job-card-buttons">
          <button className="search-buttons card-buttons">
            {popUp ? "Cancel" : "Apply"}
          </button>
        </div>
      </Popover>
    </div>
  );
};

export default JobContainer;
