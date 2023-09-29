
import { createContext, useState } from 'react';
import CoverPage from '../CoverPage/CoverPage';
import JobCategory from '../JobCategory/JobCategory';
import Jobs from '../Jobs/Jobs';

export const JobsContext = createContext(null)

const FirstPage = () => {
  const [jobs, setJobs] = useState([])
  // console.log(jobs);
  return (
    <>
    <CoverPage></CoverPage>
      <JobCategory></JobCategory>
      <Jobs></Jobs>
    </>
    
  );
};

export default FirstPage;