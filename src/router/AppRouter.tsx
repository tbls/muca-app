import AuthRouter from "@/auth/router/AuthRouter";
import CatalogPage from "@/catalog/Pages/CatalogPage";
import DashboardRouter from "@/dashboard/router/DashboardRouter";
import { Navigate, Route, Routes } from "react-router";

const AppRouter = () => {
  const isLogedIn = false;
  return (
    <Routes>
      <Route index element={<CatalogPage />} />
      {
      isLogedIn 
        ? <Route path="/*" element={<DashboardRouter />} />
        : <Route path="auth/*" element={<AuthRouter />} />
      }

      <Route path='/*' element={<Navigate replace to='/auth/login' />} />
    </Routes>
  );
};

export default AppRouter;
