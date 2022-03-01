import {useState} from 'react'
import ResumeUploadform from "../resume-upload-form/ResumeUploadForm.component"
import { Popover } from 'antd'


const JobApplyPopover = ({jobTitle,Button}) => {
    const [popUp, setPopUp] = useState(false)
    const popUpHandleChange=()=>{
        setPopUp(!popUp)
    }
  return (
    <Popover
    content={<ResumeUploadform onClick={popUpHandleChange} />}
    title={jobTitle}
    trigger="click"
    visible={popUp}
    onVisibleChange={popUpHandleChange}
  >
    {Button ? Button :(<div className="job-card-buttons">
      <button className="search-buttons card-buttons">
        {popUp ? "Cancel" : "Apply"}
      </button>
    </div>)}
  </Popover>
  )
}

export default JobApplyPopover