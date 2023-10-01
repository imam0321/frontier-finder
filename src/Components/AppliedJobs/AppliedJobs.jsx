import { useContext, useEffect, useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";
import { JobsContext } from "../Layout/FirstPage";
import AppliedJobDetail from "../AppliedJobDetail/AppliedJobDetail";

const AppliedJobs = () => {
  // const [jobs] = useContext(JobsContext)
  // const [jobCart, setJobCart] = useState([])
  // useEffect(()=>{
  //   const storedJobCart = getShoppingCart();
  //   const saveJobCart = []
  //   for(const id of storedJobCart){
  //     const addedJobs = jobs.find(jb => jb.id === id)
  //     if(addedJobs){
  //       const quantity = storedJobCart[id]
  //       addedJobs.quantity = quantity;
  //       saveJobCart.push(addedJobs)
  //     }
  //   }
  //   setJobCart(saveJobCart)
  // },[jobs])
  
  
  return (
    <div>
      <img className="-ml-44 -mt-40" src="/src/assets/All Images/Vector.png" alt="" />
      {
        // jobCart.map(job => <AppliedJobDetail key={job.id} job={job}></AppliedJobDetail>)
      }
    </div>
  );
};

export default AppliedJobs;