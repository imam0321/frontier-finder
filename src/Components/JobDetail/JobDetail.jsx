import { useParams } from "react-router-dom";
import { CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon, MapIcon} from '@heroicons/react/24/solid'
import { useContext, useState } from "react";
import { JobsContext } from "../Layout/FirstPage";
import { addToDb } from "../utilities/fakedb";

const JobDetail = () => {

  const  [jobs] = useContext(JobsContext);
  const {id}  = useParams();
  const job = jobs.find(job => job.id === Number(id))

  const { jobTitle, jobDescription, location, salary, educationalRequirements, jobResponsibility, experience } = job;
  const { phone, email } = job.contact;
  
  
  const [jobCart, setJobCart] = useState([])

  const handelAddToJob = (selectedJob) =>{
    let newJob = 0;
    const exists = jobCart.find(jb => jb.id === selectedJob.id )
    if(!exists){
      selectedJob.quantity = 1;
      newJob = [...jobCart, selectedJob];
    }
    else{
      const rest = jobCart.filter(jb => jb.id !== selectedJob.id);
      exists.quantity = exists.quantity + 1; // work for this condition
      newJob = [...rest, exists] 
    }
    setJobCart(newJob)
    addToDb(selectedJob.id)
  }
  
  return (
    <section className="">
      <img className="-ml-44 -mt-40" src="/src/assets/All Images/Vector.png" alt="" />
      <div className="grid grid-cols-12 gap-x-6 mx-60 my-14">
      <div className="col-span-8 ">
        <p className="mb-6"><span className="text-base font-bold">Job Description: </span>{jobDescription}</p>
        <p className="mb-6"><span className="text-base font-bold">Job Responsibility: </span>{jobResponsibility}</p>
        <h3 className="text-base font-bold my-4">Educational Requirements:</h3>
        <p className="my-2">{educationalRequirements}</p>
        <h3 className="text-base font-bold my-4">Experiences:</h3>
        <p className="my-2">{experience}</p>
      </div>

      <div className="col-span-4">
        <div className="p-4">
          <h1 className="font-bold">Job Details</h1>
          <hr className="my-2"/>
          <div className="flex items-center">
            <CurrencyDollarIcon className="h-5 w-5 mr-2 text-blue-500" />
            <span>Salary : {salary}</span>
          </div>
          <div className="flex mt-1 mb-4">
            <BriefcaseIcon className="h-6 w-6 mr-2 text-blue-500" />
            <p className="flex-wrap">Job Title : {jobTitle}</p>
          </div>
          <h1 className="font-bold my-3">Contact Information</h1>
          <hr className=""/>
          <div className="my-2">
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2 text-blue-500" />
              <span>Phone : {phone}</span>
            </div>
            <div className="flex items-center my-1">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-blue-500" />
              <span>Email : {email}</span>
            </div>
            <div className="flex items-center">
              <MapIcon className="h-5 w-5 mr-2 text-blue-500" />
              <span>Address : {location}</span>
            </div>
          </div> 
        </div>
        <button onClick={() => handelAddToJob(job)} className="rounded-md bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold px-24 py-2">Apply Now</button>
      </div>
    </div>
    </section>
  );
};

export default JobDetail;