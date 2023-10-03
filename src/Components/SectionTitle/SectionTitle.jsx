
const SectionTitle = ({ heading, subHeading}) => {
  return (
    <div className="text-center mt-20 mb-6">
      <h2 className="text-[36px] font-semibold mb-2">{heading}</h2> 
      <p className="text-sm text-gray-500">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;