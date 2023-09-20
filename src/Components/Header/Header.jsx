import { Link } from "react-router-dom";


const Header = () => {
  
  return (
    <nav className="flex justify-between items-center mx-60 my-10">
      <h1 className="text-3xl font-bold">Frontier Finder</h1>
      <div className="text-gray-500">
        <Link className="mr-10" to='/'>Home</Link>
        <Link className="mr-10" to='/statistics'>Statistics</Link>
        <Link className="mr-10" to='/applied-jobs'>Applied Jobs</Link>
        <Link to='/blog'>Blog</Link>
      </div>
      <button className="rounded-md bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold px-6 py-3">Star Applying</button>
    </nav>
  );
};

export default Header;