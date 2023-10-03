import Blog from "../Blog/Blog";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: 'The Basics of Web Development',
      author: 'John Doe',
      date: 'October 1, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Introduction to React.js',
      author: 'Jane Smith',
      date: 'October 2, 2023',
      content: 'A beginner-friendly guide to React.js for front-end development.',
    },
    {
      id: 3,
      title: 'CSS Best Practices',
      author: 'David Johnson',
      date: 'October 3, 2023',
      content: 'Learn the best practices for writing clean and maintainable CSS code.',
    },
    {
      id: 4,
      title: 'JavaScript Fundamentals',
      author: 'Emily Wilson',
      date: 'October 4, 2023',
      content: 'A comprehensive overview of the core concepts of JavaScript.',
    },
    {
      id: 5,
      title: 'Responsive Web Design Techniques',
      author: 'Michael Brown',
      date: 'October 5, 2023',
      content: 'Tips and tricks for creating responsive web designs that work on all devices.',
    },
    {
      id: 6,
      title: 'Node.js for Back-End Development',
      author: 'Sarah Adams',
      date: 'October 6, 2023',
      content: 'An introduction to Node.js and its use in building server-side applications.',
    },
    {
      id: 7,
      title: 'Front-End Frameworks Comparison',
      author: 'Kevin Clark',
      date: 'October 7, 2023',
      content: 'A comparison of popular front-end JavaScript frameworks like React, Vue, and Angular.',
    },
    {
      id: 8,
      title: 'Web Security Best Practices',
      author: 'Alice Martinez',
      date: 'October 8, 2023',
      content: 'Essential security practices for protecting your web applications from threats.',
    },
    {
      id: 9,
      title: 'Getting Started with Redux',
      author: 'George Turner',
      date: 'October 9, 2023',
      content: 'An introduction to Redux, a state management library for React applications.',
    },
    {
      id: 10,
      title: 'The Future of Web Development',
      author: 'Laura White',
      date: 'October 10, 2023',
      content: 'Exploring emerging trends and technologies in the world of web development.',
    },
  ];
  
  return (
    <div>
      <img className="-ml-44 -mt-40" src="/src/assets/All Images/Vector.png" alt="" />
      <div className="container mx-auto mt-8">
      {
        blogs.map(blog => <Blog 
          key={blog.id}
          blog={blog}
          ></Blog>)
      }
    </div>
    </div>
  );
};

export default Blogs;