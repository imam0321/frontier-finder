import { useLoaderData } from "react-router-dom";




const JobDetail = () => {
 const {detail} = useLoaderData() 
//  console.log(d);
  const {id, img, jobTitle, companyName, jobType, location, salary} = detail
  
 
  return (
    <div>
      
      
      <h1>details {detail.length}</h1>
      <img src={img} alt="" />
      <p>{id}</p>
    </div>
  );
};

export default JobDetail;