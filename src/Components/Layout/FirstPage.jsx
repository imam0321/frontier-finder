
import { createContext, useState } from 'react';
import CoverPage from '../CoverPage/CoverPage';
import JobCategory from '../JobCategory/JobCategory';
import Jobs from '../Jobs/Jobs';

export const JobsContext = createContext()

const FirstPage = () => {
  const [jobs, setJobs] = useState([])
  // console.log(jobs);
  return (
    <JobsContext.Provider value={[jobs, setJobs]}>
      <CoverPage></CoverPage>
      <JobCategory></JobCategory>
      <Jobs></Jobs>
    </JobsContext.Provider>
  );
};

export default FirstPage;