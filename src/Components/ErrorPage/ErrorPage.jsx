import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-red-600">404</h1>
        <p className="text-lg text-gray-700">Oops! Page not found.</p>
        <p className="text-sm text-gray-500 mt-4 mb-6">
          The page you are looking for might have been removed or doesn't exist.
        </p>
        <Link to='/'
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;