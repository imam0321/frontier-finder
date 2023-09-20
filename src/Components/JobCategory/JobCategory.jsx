import { useLoaderData } from "react-router-dom";
import JobCategoryDetail from "../JobCategoryDetail/JobCategoryDetail";

const JobCategory = () => {
  const categories = useLoaderData()
  console.log(categories);
  return (
    <div className="mx-60">
      <div className="text-center mt-20 mb-6">
        <h2 className="text-[36px] font-semibold mb-2">Job Category List</h2> 
        <p className="text-sm text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="flex justify-around items-center mb-16">
      {
        categories.map(category => <JobCategoryDetail 
          key={category.id}
          category={category}
          ></JobCategoryDetail>)
      }   
      </div>   
    </div>
  );
};

export default JobCategory;