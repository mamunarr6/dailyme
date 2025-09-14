import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center p-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-[#ddeedd] hover:bg-[#c6d8c6] text-black rounded-lg font-medium transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
