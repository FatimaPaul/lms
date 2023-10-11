import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../pages/signup";
import Login from "../pages/login";
import AdminDashboard from "../pages/adminDashboard";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="adminDashboard/*" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
