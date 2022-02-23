import "./JobCard.styles.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { Popover, Button } from "antd";

//components
import CustomButton from "../Custom-Button/CustomButton.component";

import { Card } from "antd";
import ResumeUploadform from "../Resume-Upload-Form/ResumeUploadForm.component";

const JobContainer = ({ children, ...otherprops }) => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  // const { _id, jobTitle, shortDescription, experience } = otherprops.job;
  // const user = useSelector((state) => state.user.Token);
  const [resumeUploadPopUp, setResumeUploadPopUp] = useState(false);

  // //pop up resume uploading card
  const applyJobPopUpHeadler = () => {
    setResumeUploadPopUp(!resumeUploadPopUp);
  };

  // const hide = () => {
  //   setState(false);
  // };

  const handleVisibleChange = (visible) => {
    setState(!state);
  };

  //navigate specific job page
  const navigateJobDetails = () => {
    navigate(`123`, {
      data: "hi",
    });
  };
  return (
    // <Card
    //   title={jobTitle}
    //   extra={
    //     <Popover
    //       content={<ResumeUploadform onClick={applyJobPopUpHeadler} />}
    //       title={jobTitle}
    //       trigger="click"
    //       visible={state}
    //       onVisibleChange={handleVisibleChange}
    //     >
    //       <Button type="primary">{state ? "Cancel" : "Apply"}</Button>
    //     </Popover>
    //   }
    //   style={{ width: 300 }}
    // >
    //   <p>{shortDescription}</p>
    // </Card>
    <div className="job-card">
      <div className="job-card-header"></div>
      <div className="job-card-title">UI / UX Designer</div>
      <div className="job-card-subtitle">
        The User Experience Designer position exists to create compelling and
        digital user experience{" "}
        <span onClick={navigateJobDetails}>Read More ...</span>
      </div>
      <div className="job-detail-buttons">
        <button className="search-buttons detail-button">Full Time</button>
        <button className="search-buttons detail-button">Min. 1 Year</button>
        <button className="search-buttons detail-button">Senior Level</button>
      </div>
      <div className="job-detail-buttons">
        <button className="search-buttons detail-button">
          Skill-1, Skill-2, Skill-N
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
