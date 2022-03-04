import "./JobCard.styles.scss";
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../icon/location.svg";

import { Popover } from "antd";

//redux
import { useSelector,useDispatch } from "react-redux";
import {deleteJob } from '../../redux/jobs/jobsAction'



//components
import CustomButton from "../Custom-Button/CustomButton.component";


import ResumeUploadform from "../resume-upload-form/ResumeUploadForm.component";

const JobContainer = ({ children, ...otherprops }) => {
  const dispatch=useDispatch()
  const navigate = useNavigate();

  const user =useSelector(user=>user.admin.email)
  
  const [popUp, setPopUp] = useState(false)
  const [resumeUploadPopUp, setResumeUploadPopUp] = useState(false);

  useEffect(() => {
    console.log(user);
    
  }, [user])
  


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

  const deleteJobHandler=()=>{
    dispatch(deleteJob(_id))
  }


  const {
    _id,
    jobTitle,
    shortDescription,
    skill,
    experience,
    type,
    workLocation,
  } = otherprops.job;



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
      {user.length?
      (<div className="job-card-buttons card-buttons d-flex justify-content-around align-items-center ">
        <CustomButton onClick={deleteJobHandler} className="btn btn-danger rounded w-25">Delete</CustomButton>
        <CustomButton onClick={()=>navigate(`/admin/${_id}`,{state:{id:_id}})} className="btn btn-success rounded w-25">View</CustomButton>
        </div>):
      (
        <Popover
          content={<ResumeUploadform onClick={handleVisibleChange}  jobId={_id}/>}
          title={jobTitle}
          trigger="click"
          visible={popUp}
          onVisibleChange={handleVisibleChange}
        >
          <div className="job-card-buttons">
            <CustomButton className="search-buttons card-buttons">
              {popUp ? "Cancel" : "Apply"}
            </CustomButton>
          </div>
        </Popover>) 
     }
    </div>
  );
};

export default JobContainer;
