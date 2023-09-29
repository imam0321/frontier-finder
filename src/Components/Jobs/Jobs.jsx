import Job from "../Job/Job";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useContext } from "react";
import { JobsContext } from "../Layout/FirstPage";

const Jobs = () => {
  const [jobs] = useContext(JobsContext);
  
  return (
    <div >
      <SectionTitle 
        heading={'Featured Jobs'} 
        subHeading={'Explore thousands of job opportunities with all the information you need. Its your future'}
      ></SectionTitle>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {
            jobs.map(job => <Job 
              key={job.id}
              job={job}
              ></Job>)
          }
        </div>
        <div className="mb-16">
          <button className="rounded-md bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold px-5 py-2">See All Jobs</button>  
        </div>
      </div>
    </div>
  );
};

export default Jobs;