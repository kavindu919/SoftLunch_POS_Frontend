import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../pages/DashboardPage";
import StaffPage from "../pages/Staff/StaffPage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/Product/ProductPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoute;
