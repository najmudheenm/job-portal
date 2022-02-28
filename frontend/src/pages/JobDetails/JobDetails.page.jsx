import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const JobDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [data, setData] = useState(state || {});
  const jobs = useSelector((state) => state);
  console.log(jobs);

  useEffect(() => {
    if (!state && jobs) {
      console.log(id);
      const job = jobs.filter((job) => job._id == id);
      setData(job);
    }
    console.log("state", data);
  }, [jobs, data]);

  return <div>JobDetails</div>;
};

export default JobDetails;
