import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./JobDetails.style.scss";
import IconCard from "../../components/Icon-Card/IconCard.component";

import JobApplyPopover from "../../components/Job-Apply-Popover/JobApplyPopover.component"
import DescriptionWithList from "../../components/Discription-With-List/DescriptionWithList.components";

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
  const {
    workLocation,
    skillExp,
    salary,
    type,
    category,
    shortDescription,
    experience,
    postedDate,
    expire,
    skill,
    jobTitle,
    jobDescription,
  } = state.job;
  const jobdisc=jobDescription.filter(jobdisc=>jobdisc !="\n");
  console.log(jobdisc);
  return (
    <div className="job-details container-flued">
      <div className="breadcrumb-section section bg_color--5 pt-60 pt-sm-50 pt-xs-40 pb-60 pb-sm-50 pb-xs-40">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-breadcrumb-content">
                <h1>{jobTitle}</h1>
              </div>
              <div className="job-meta-detail">
                <ul>
                  <li className="posted">
                    <i className="ml-10 mr-2 fa fa-clock"></i>
                    <span className="text">Posted date: </span>
                    <span className="time">{postedDate} </span>
                  </li>

                  <li className="expries">
                    <i className="fa fa-hourglass"></i>
                    <span className="text">Expries in: </span>
                    <span className="date theme-color"> {expire} </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="job-meta-detail-box section bg_color--5 pb-120 pb-lg-100 pb-md-80 pb-sm-60 pb-xs-50">
        <div className="container">
          <div className="row g-0">
            <IconCard
              icon="fa fa-location-dot"
              title={"Work Location: "}
              data={workLocation}
            />
            <IconCard icon="fa fa-money-bill" title={"Salary"} data={salary} />
            <IconCard icon="fa fa-briefcase" title={"Type"} data={type} />
            <IconCard icon="fa fa-tag" title={"Category"} data={category} />
            <IconCard
              icon="fa fa-graduation-cap"
              title={"Experience"}
              data={experience}
            />
            <IconCard icon="fa fa-trophy" title={"Skills"} data={skill} />
          </div>
        </div>
      </div>

      <div className="job-details-section section pt-120 pt-lg-100 pt-md-80 pt-sm-50 pt-xs-40 pb-120 pb-lg-100 pb-md-80 pb-sm-60 pb-xs-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-1 order-1 pr-55 pr-md-15 pr-sm-15 pr-xs-15">
              <div className="job-detail-content">
                <div className="field-descriptions mb-60 mb-sm-30 mb-xs-30">
                  <p>{shortDescription}</p>
                  <DescriptionWithList
                    title="Job Description"
                    data={jobdisc}
                  />
                  <DescriptionWithList
                    title="Your Skill and Experience"
                    data={skillExp}
                  />
                </div>
                <JobApplyPopover jobTitle={jobTitle} Button={ <div className="job-apply">
                  <button
                    className="btn btn-light"
                    type="submit"
                    id="widget-subscribe-submit-button"
                  >
                    <i className="fa fa-paper-plane"></i>&nbsp;Apply Now
                  </button>
                </div>}/>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
