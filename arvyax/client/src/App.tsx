import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Login from "./auth/login";
import Register from "./auth/register";
import Protected from "./utils/Protected";
import Dashboard from "./components/Dashboard";
import { useEffect } from "react";
import { useAuthStore } from "./stores/authStore";
import MySession from "./components/MySession";

function App() {
  const { fetchUser, isLoading } = useAuthStore();
  useEffect(() => {
    const fetchData = async () => {
      await fetchUser();
    };
    fetchData();
  }, [fetchUser]);
  if (isLoading) {
    return <div className="p-10 text-xl">Loading...</div>; // or your spinner
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Protected />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/session" element={<MySession />} />

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
