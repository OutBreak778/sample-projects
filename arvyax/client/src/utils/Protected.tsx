import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

const Protected = () => {
  const {isAuthenticated, isLoading} = useAuthStore();
  if (isLoading) {
    return <div className="p-10 text-xl">Loading...</div>; // or your spinner
  }

  if (!isAuthenticated) return <Navigate to="/" replace />;
  return <Outlet />;
};

export default Protected;
