import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}></Route>
    </Routes>
  );
};

export default AppRoute;
