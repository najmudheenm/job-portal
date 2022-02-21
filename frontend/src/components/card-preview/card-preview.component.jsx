import "./card-preview.styles.scss";
import React from "react";
import JobCard from "../Job-card/job-card.component";
import ResumeUploadform from "../resume-upload-form/resume-upload-form.component";

const CardPreview = () => {
  return (
    <div className="card-preview">
      <JobCard key={2}>
        <ResumeUploadform />
      </JobCard>
      <JobCard key={1}>
        <ResumeUploadform />
      </JobCard>
      <JobCard key={3}>
        <ResumeUploadform />
      </JobCard>
      <JobCard key={4}>
        <ResumeUploadform />
      </JobCard>
    </div>
  );
};

export default CardPreview;
