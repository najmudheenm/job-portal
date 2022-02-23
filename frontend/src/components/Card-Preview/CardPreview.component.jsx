import "./CardPreview.styles.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../Job-Card/JobCard.component";

const CardPreview = () => {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/joblist")
      .then(({ data: { response } }) => setJobs(response))
      .catch((err) => console.log(err));
  }, [setJobs]);
  return (
    <div className="card-preview">
      {jobs && jobs.map((job) => <JobCard key={job._id} job={job} />)}
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
};

export default CardPreview;
