import { Route, Navigate, Routes } from "react-router";
import ShipingTrackerPage from "../pages/ShipingTrackerPage";

const ShippingTrackerRouter = () => {
  return (
    <Routes>
      <Route index element={<ShipingTrackerPage />} />
      <Route path="/*" element={<Navigate to="/shipping-tracker" />} />
    </Routes>
  );
};

export default ShippingTrackerRouter;
