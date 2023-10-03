

const Blog = ({ blog }) => {
  const { title, author, date, content } = blog 
  return (
    <div className="bg-white p-4 shadow-md rounded-lg mx-60 my-5">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <div className="text-gray-600 text-sm mb-2">
        <span>Author: {author}</span>
        <span className="mx-2">|</span>
        <span>Date: {date}</span>
      </div>
      <p className="text-gray-800">{content}</p>
    </div>
  );
};

export default Blog;