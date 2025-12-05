import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import type { RootState } from "@/store/auth/store";
import DashboardRouter from "@/dashboard/router/DashboardRouter";
import AuthRouter from "@/auth/router/AuthRouter";

const AppRouter = () => {
  const { isLogged } = useSelector((state: RootState) => state.auth);
  return (
    <Routes>
      {isLogged ? (
        <Route path="/*" element={<DashboardRouter />} />
      ) : (
        <Route path="auth/*" element={<AuthRouter />} />
      )}

      <Route path="/*" element={<Navigate replace to="/auth/login" />} />
    </Routes>
  );
};

export default AppRouter;
