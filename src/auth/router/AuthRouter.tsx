import { Route, Routes } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthLayout from "../layouts/AuthLayout";

const AuthRouter = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default AuthRouter;
