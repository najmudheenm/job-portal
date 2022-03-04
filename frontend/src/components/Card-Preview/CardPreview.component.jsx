import "./CardPreview.styles.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../Job-Card/JobCard.component";

import { fetchJobData } from "../../redux/jobs/jobsAction";

const CardPreview = () => {
  const jobs = useSelector((state) => state.jobs.jobs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobData());
  }, [dispatch]);

  return (
    <div className="card-preview">
      {jobs.length && jobs.map((job) => <JobCard key={job._id} job={job} />)}
    </div>
  );
};

export default CardPreview;
