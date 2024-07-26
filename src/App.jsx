import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupPage from "./pages/authpage/SignupPage";
import VerifyEmailPage from "./pages/authpage/VerifyEmailPage";
import LoginPage from "./pages/authpage/LoginPage";
import ResetPassword from "./pages/authpage/ResetPassword";
import NewPasswordReset from "./pages/authpage/NewPasswordReset";
import PrivateAdminRoute from "./components/adminPrivateRoutes/PrivateAdminRoute";
import AdminLayout from "./components/adminPrivateRoutes/AdminLayout";
import CategoriesPage from "./pages/category/CategoriesPage";
import NewCategoryPage from "./pages/category/NewCategoryPage";

function App() {
  return (
    <>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/reset-password/newpassword"
          element={<NewPasswordReset />}
        />

        {/* PRIVATE ROUTE */}
        <Route
          path="/admin"
          element={
            <PrivateAdminRoute>
              {" "}
              <AdminLayout />{" "}
            </PrivateAdminRoute>
          }
        >
          <Route path="/admin/categories" element={<CategoriesPage />} />
          <Route path="new-category" element={<NewCategoryPage />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
