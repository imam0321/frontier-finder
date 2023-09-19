import { Link } from "react-router-dom";


const Header = () => {
  const jobCategories = [
    {
      id: 1,
      categoryName: "Software Development",
      quantity: "50+ Jobs Available"
    },
    {
      id: 2,
      categoryName: "Marketing",
      quantity: "30+ Jobs Available"
    },
    {
      id: 3,
      categoryName: "Data Analysis",
      quantity: "20+ Jobs Available"
    },
    {
      id: 4,
      categoryName: "Graphic Design",
      quantity: "15+ Jobs Available"
    }
  ];
  return (
    <nav className="flex justify-between items-center px-60 py-10">
      <h1 className="text-3xl font-bold">Frontier Finder</h1>
      <div className="text-gray-500">
        <Link className="mr-10" to='/'>Home</Link>
        <Link className="mr-10" to='/statistics'>Statistics</Link>
        <Link className="mr-10" to='/applied-jobs'>Applied Jobs</Link>
        <Link to='/blog'>Blog</Link>
      </div>
      <button className="rounded-md bg-gradient-to-r from-violet-400 to-violet-500 text-white font-semibold px-6 py-3">Star Applying</button>
    </nav>
  );
};

export default Header;