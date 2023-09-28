import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
  const {id, img, jobTitle, companyName, jobType, location, salary} = job;
  return (
    <div>
      <div className="border-solid border rounded pl-8 py-6 pr-7">
        <img src={img} alt="" />
        <h3 className='text-lg font-semibold mt-4'>{jobTitle}</h3>
        <p className='pb-1 text-gray-500'><small>{companyName}</small></p>
        <button className='px-3  border-solid border-2 rounded-sm border-violet-400 text-violet-500'>{jobType}</button>
        <div className="flex items-center text-gray-500 mt-2 mb-4">
          <div className="flex items-center mr-6">
            <MapPinIcon className="h-5 w-5 mr-2"/>
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <CurrencyDollarIcon className="h-5 w-5 mr-2"/>
            <span>{salary}</span>
          </div>
        </div>
        <Link to= {`/${id}`} className="rounded-md bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold px-5 py-2">View Details</Link>
      </div>
      
    </div>
  );
};

export default Job;