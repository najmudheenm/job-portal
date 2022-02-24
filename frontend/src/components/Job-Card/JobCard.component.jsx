import "./JobCard.styles.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../icon/location.svg";

import { useSelector } from "react-redux";
import { Popover, Button } from "antd";

//components
import CustomButton from "../Custom-Button/CustomButton.component";

import { Card } from "antd";
import ResumeUploadform from "../Resume-Upload-Form/ResumeUploadForm.component";

const JobContainer = ({ children, ...otherprops }) => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  const [resumeUploadPopUp, setResumeUploadPopUp] = useState(false);

  // //pop up resume uploading card
  const applyJobPopUpHeadler = () => {
    setResumeUploadPopUp(!resumeUploadPopUp);
  };

  const handleVisibleChange = () => {
    setState(!state);
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
    skills,
    experience,
    jobType,
    remote,
    onSite,
    hybrid,
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
          Job Type : {jobType}
        </button>
        <button className="search-buttons detail-button">
          <span>
            <Logo />
          </span>
          {hybrid && "Hybrid, "}
          {onSite && "On-site "}
          {hybrid && "Hybrid "}
        </button>
      </div>
      <div className="job-detail-buttons">
        <button className="search-buttons detail-button">
          Skills : {skills}
        </button>
      </div>

      <Popover
        content={<ResumeUploadform onClick={applyJobPopUpHeadler} />}
        title="test"
        trigger="click"
        visible={state}
        onVisibleChange={handleVisibleChange}
      >
        <div className="job-card-buttons">
          <button className="search-buttons card-buttons">
            {state ? "Cancel" : "Apply"}
          </button>
        </div>
      </Popover>
    </div>
  );
};

export default JobContainer;
