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

  const { _id, jobTitle, shortDescription, experience } = otherprops.job;
  const user = useSelector((state) => state.user.Token);
  const [resumeUploadPopUp, setResumeUploadPopUp] = useState(false);

  //pop up resume uploading card
  const applyJobPopUpHeadler = () => {
    setResumeUploadPopUp(!resumeUploadPopUp);
  };

  const hide = () => {
    setState(false);
  };

  const handleVisibleChange = (visible) => {
    setState(!state);
  };

  //navigate specific job page
  const navigateJobDetails = () => {
    navigate(`careers/${_id}`);
  };
  return (
    <Card
      title={jobTitle}
      extra={
        <Popover
          content={<ResumeUploadform onClick={applyJobPopUpHeadler} />}
          title={jobTitle}
          trigger="click"
          visible={state}
          onVisibleChange={handleVisibleChange}
        >
          <Button type="primary">{state ? "Cancel" : "Apply"}</Button>
        </Popover>
      }
      style={{ width: 300 }}
    >
      <p>{shortDescription}</p>
    </Card>
  );
};

export default JobContainer;
