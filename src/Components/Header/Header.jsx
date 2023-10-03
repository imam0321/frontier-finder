import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  
  return (
    <nav className="md:flex justify-between items-center md:mx-60 my-10">
      <h1 className="text-3xl font-bold">Frontier Finder</h1>
      <div className="text-gray-500">
        <ActiveLink className="mr-10" to='/'>Home</ActiveLink>
        <ActiveLink className="mr-10" to='/statistics'>Statistics</ActiveLink>
        <ActiveLink className="mr-10" to='/applied-jobs'>Applied Jobs</ActiveLink>
        <ActiveLink to='/blogs'>Blogs</ActiveLink>
      </div>
      <Link to='/jobs' className="rounded-md bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold px-6 py-3">Star Applying</Link>
    </nav>
  );
};

export default Header;