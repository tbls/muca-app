import { Route, Navigate, Routes } from "react-router";
import DashboardPage from "../pages/DashboardPage";
import ShippingTrackerRouter from "../../shipping-traker/router/ShippingTrackerRouter";

const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/shipping-tracker/*" element={<ShippingTrackerRouter />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default DashboardRouter;
