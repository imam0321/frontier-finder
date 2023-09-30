
import { createContext } from 'react';
import CoverPage from '../CoverPage/CoverPage';
import JobCategory from '../JobCategory/JobCategory';
import Jobs from '../Jobs/Jobs';

export const JobsContext = createContext(null)

const FirstPage = () => {

  return (
    <>
    <CoverPage></CoverPage>
      <JobCategory></JobCategory>
      <Jobs></Jobs>
    </>
    
  );
};

export default FirstPage;