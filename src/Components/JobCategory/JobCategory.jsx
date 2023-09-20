import JobCategoryDetail from "../JobCategoryDetail/JobCategoryDetail";

const JobCategory = () => {
  const jobCategories = [
    {
      id: 1,
      img: "../src/assets/Icons/accounts 1.png",
      categoryName: "Account & Finance",
      quantity: "300+ Jobs Available"
    },
    {
      id: 2,
      img: "../src/assets/Icons/business 1.png",
      categoryName: "Creative Design",
      quantity: "100+ Jobs Available"
    },
    {
      id: 3,
      img: "../src/assets/Icons/social-media 1.png",
      categoryName: "Marketing & Sales",
      quantity: "150+ Jobs Available"
    },
    {
      id: 4,
      img: "../src/assets/Icons/chip 1.png",
      categoryName: "Engineering Job",
      quantity: "250+ Jobs Available"
    }
  ];

  return (
    <div className="mx-60">
      <div className="text-center mt-20 mb-6">
        <h2 className="text-[36px] font-semibold mb-2">Job Category List</h2> 
        <p className="text-sm text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="flex justify-around items-center mb-16">
      {
        jobCategories.map(category => <JobCategoryDetail 
          key={category.id}
          category={category}
          ></JobCategoryDetail>)
      }   
      </div>   
    </div>
  );
};

export default JobCategory;