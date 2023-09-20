import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";

const Jobs = () => {
  const jobs = useLoaderData();
  return (
      <div >
      <div className="text-center mt-20 mb-6">
        <h2 className="text-[36px] font-semibold mb-2">Featured Jobs</h2> 
        <p className="text-sm text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 gap-6 mb-6">
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