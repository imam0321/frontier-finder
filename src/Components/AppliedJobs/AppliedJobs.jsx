import { useContext, useEffect, useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";
import { JobsContext } from "../Layout/FirstPage";
import AppliedJobDetail from "../AppliedJobDetail/AppliedJobDetail";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const jobCart = useLoaderData()
  
  
  return (
    <div>
      <img className="-ml-44 -mt-40" src="/src/assets/All Images/Vector.png" alt="" />
      <div className="my-10">
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