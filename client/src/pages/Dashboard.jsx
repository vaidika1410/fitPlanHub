import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// pages
import TrainerDashboard from "./TrainerDashboard";
import UserDashboard from "./UserDashboard";

const Dashboard = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  useEffect(() => {
    // 🔒 not logged in → go to landing
    if (!token) {
      navigate("/");
      return;
    }

    // ❌ invalid role → force logout
    if (role !== "user" && role !== "trainer") {
      localStorage.clear();
      navigate("/");
    }
  }, [token, role, navigate]);

  if (!token) return null;

  // 🎯 ROLE BASED DASHBOARD
  return role === "trainer" ? (
    <TrainerDashboard />
  ) : (
    <UserDashboard />
  );
};

export default Dashboard;
