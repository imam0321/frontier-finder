import { Link } from "react-router-dom";

const CoverPage = () => {
  return (
      <div className="md:flex justify-center items-center md:mx-60 my-14">
        <div className="md:w-3/6">
          <h2 className="text-[50px] leading-tight font-bold mb-2 pr-24">One Step Closer To Your <span className="text-violet-500">Dream Job</span></h2>
          <p className="text-sm text-gray-500 pr-24	mb-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <Link to='/jobs' className="rounded-md bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold px-6 py-3">Get Started</Link>
        </div>
        <div className="w-3/6">
          <img className="" src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
        </div>
      </div>
  );
};

export default CoverPage;