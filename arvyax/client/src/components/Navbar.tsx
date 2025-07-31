import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        🧘 Arvyax
      </Link>
      <div className="space-x-4">
        {isAuthenticated ? (
          <>
          
          <Link to="/dashboard" className="text-gray-600 hover:text-indigo-600">
            Dashboard
          </Link>
          <Link to="/session" className="text-gray-600 hover:text-indigo-600">
            my-session
          </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-600 hover:text-indigo-600">
              Login
            </Link>
            <Link
              to="/register"
              className="text-gray-600 hover:text-indigo-600"
            >
              Register
            </Link>
          </>
        )}
        {
          isAuthenticated &&
        <button onClick={logout} className="px-3 py-2 border-2 rounded-lg cursor-pointer">
          logout
        </button>
        }
      </div>
    </nav>
  );
};

export default Navbar;
