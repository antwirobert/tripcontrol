import { Link, useNavigate } from "react-router";
import { logoutUser } from "~/appwrite/auth";

const PageLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/sign-in");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-tr from-blue-100 via-white to-purple-100 px-4 relative overflow-hidden">
      <div className="bg-white shadow-xl rounded-2xl p-10 flex flex-col items-center gap-6 w-full max-w-md relative z-10">
        <img
          src="/assets/icons/logo.svg"
          alt="TripControl Logo"
          className="w-20 h-20"
        />

        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Welcome to TripControl
        </h1>
        <p className="text-gray-500 text-center">
          Manage destinations, trips, and users with ease. Click below to go to
          your dashboard or log out.
        </p>

        <Link
          to="/dashboard"
          className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-md"
        >
          Go to Dashboard
        </Link>

        <button
          onClick={handleLogout}
          className="w-full text-center border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <img
            src="/assets/icons/logout.svg"
            alt="Logout"
            className="w-5 h-5"
          />
          Logout
        </button>
      </div>
    </main>
  );
};

export default PageLayout;
