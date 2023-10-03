import AppliedJobDetail from "../AppliedJobDetail/AppliedJobDetail";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const jobCart = useLoaderData()
  let sms;
  if(jobCart.length === 0){
    sms = <p className="text-4xl text-yellow-500 text-center font-bold">Please Apply a Job</p>
  }
  
  return (
    <div>
      <img className="-ml-44 -mt-40" src="/src/assets/All Images/Vector.png" alt="" />
      <div className="my-10">
        {sms}
        {
          jobCart.map(job => <AppliedJobDetail 
            key={job.id}
            job={job}
            ></AppliedJobDetail>)
        }
      </div>
    </div>
  );
};

export default AppliedJobs;