import { useParams } from "react-router-dom";
import { CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon, MapIcon} from '@heroicons/react/24/solid'


const JobDetail = () => {
  const {id}  = useParams()
  // const  [jobs, setJobs] = useContext(JobsContext)
  // const job = jobs.find(job => job.id === id)
  // console.log(job);
  // const [detail, setDetail] = useState([])
  

  
  // const {id, img, jobTitle, companyName, jobType, location, salary} = detail
  
 
  return (
    <section className="bg">
      <img className="-ml-44 -mt-20" src="/src/assets/All Images/Vector.png" alt="" />
      <div className="flex justify-between mx-60 my-14">
      <div className="">
        <p className="mb-6"><span className="text-base font-bold">Job Description: </span>Join our customer support team and help our customers with their inquiries and issues.</p>
        <p className="mb-6"><span className="text-base font-bold">Job Responsibility: </span>Assist customers via phone and email, resolve inquiries, provide product information.</p>
        <h3 className="text-base font-bold my-4">Educational Requirements:</h3>
        <p className="my-2">High school diploma or equivalent</p>
        <h3 className="text-base font-bold my-4">Experiences:</h3>
        <p className="my-2">1+ year of customer support experience</p>
      </div>

      <div className="ml-4">
        <div className="p-4">
          <h1 className="font-bold">Job Details</h1>
          <hr className="my-2"/>
          <div className="flex items-center">
            <CurrencyDollarIcon className="h-5 w-5 mr-2 text-blue-500" />
            <span>Salary : $22,000 - $27,000</span>
          </div>
          <div className="flex mt-1 mb-4">
            <BriefcaseIcon className="h-6 w-6 mr-2 text-blue-500" />
            <p className="flex-wrap">Job Title : Customer Support Representative</p>
          </div>
          <h1 className="font-bold my-3">Contact Information</h1>
          <hr className=""/>
          <div className="my-2">
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2 text-blue-500" />
              <span>Phone : 877-555-4321</span>
            </div>
            <div className="flex items-center my-1">
              <EnvelopeIcon className="h-5 w-5 mr-2 text-blue-500" />
              <span>Email : support@supportx.com</span>
            </div>
            <div className="flex items-center">
              <MapIcon className="h-5 w-5 mr-2 text-blue-500" />
              <span>Address : Austin, TX</span>
            </div>
          </div> 
        </div>
        <button className="bg-violet-500 text-white rounded px-24 py-2">Apply Now</button>
      </div>
    </div>
    </section>
  );
};

export default JobDetail;