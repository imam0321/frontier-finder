

const JobCategoryDetail = ({ category }) => {
  const { img, categoryName, quantity } = category

  return (
    <section>
      <article className="p-8">
        <img className="mb-10" src={img} alt="" />
        <h3 className="text-lg font-semibold ">{categoryName}</h3>
        <p className="text-gray-500"><small>{quantity}</small></p>
      </article>
      
    </section>
  );
};

export default JobCategoryDetail;