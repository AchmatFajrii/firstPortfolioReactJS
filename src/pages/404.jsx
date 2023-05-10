import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
    <div className="flex justify-center items-center flex-col min-h-screen text-white">
      <h1 className="text-7xl font-bold">Oops!</h1>
      <p className="mt-4 text-lg">Page {error.statusText || error.message}</p>
      <Link to="/" className="bg-primary py-2 px-6 mt-6 rounded-full text-black">Go Home!</Link>
    </div>
    </>
  );
};

export default ErrorPage;
