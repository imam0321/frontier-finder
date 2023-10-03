import { CurrencyDollarIcon, MapPinIcon} from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';

const AppliedJobDetail = ({ job }) => {
  const { id, img, jobTitle, companyName, jobType, location, salary } = job
  const navigate = useNavigate();
  return (
    <div className="mx-60 my-4  rounded-sm shadow-xl">
      <div className="grid grid-cols-12 justify-center items-center px-4 py-4  ">
        <div className="col-span-2">
          <img className='rounded-sm' src={img} alt="" />
        </div>
        <div className="col-span-8 pl-8">
          <h1 className='text-lg font-semibold'>{jobTitle}</h1>
          <p className='pb-2 text-gray-500'>{companyName}</p>
          <button className='px-3  border-solid border-2 rounded-sm border-violet-400 text-violet-500'>{jobType}</button>
          <div className="flex items-center py-2">
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-1 text-blue-500" />
              <span>{location}</span>
            </div>
            <div className="flex items-center">
              <CurrencyDollarIcon className="h-5 w-5 mr-1 ml-1 text-blue-500" />
              <span>{salary}</span>
            </div>
          </div>
        </div>
        <div className="col-span-2 pr-3">
          <button onClick={()=> navigate(`/applied-jobs/applied-job/${id}`)}  className='rounded-md bg-violet-500 text-white font-semibold px-4 py-2'>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobDetail;