import Job from "../Job/Job";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useContext, useEffect, useState } from "react";
import { JobsContext } from "../Layout/FirstPage";
import { addToDb } from "../utilities/fakedb";

const Jobs = () => {
  // const [jobs, setJobs] = useState([])
  
  const [jobs] = useContext(JobsContext);
  // useEffect(()=>{
  //   fetch('jobs.json')
  //   .then(res => res.json)
  //   .then(data => setJobs(data))
  // },[])
  // const handleAllJobs = (limit, jobs){
  //   for(const job of jobs){
  //     if(limit && job)
  //   }
  // }
 
  
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
              // handelAddToJob={handelAddToJob}
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