import { useContext, useEffect, useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";
import { JobsContext } from "../Layout/FirstPage";
import AppliedJobDetail from "../AppliedJobDetail/AppliedJobDetail";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  // const saveJobCart = useLoaderData()
  // const [cart] = useState(saveJobCart)
  // console.log(cart);
  const [jobs] = useContext(JobsContext)
  const [jobCart, setJobCart] = useState([])
  useEffect(()=>{
    const storedJobCart = getShoppingCart();
    const saveJobCart = []
    for(const id in storedJobCart){
      const addedJobs = jobs.find(jb => jb.id === id)
      if(addedJobs){
        const quantity = storedJobCart[id]
        addedJobs.quantity = quantity;
        saveJobCart.push(addedJobs)
      }
    }
    setJobCart(saveJobCart)
  },[jobs])
  
  
  return (
    <div>
      <img className="-ml-44 -mt-40" src="/src/assets/All Images/Vector.png" alt="" />
      <h1>I</h1>
      <div>
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