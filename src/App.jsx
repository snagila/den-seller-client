import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupPage from "./pages/authpage/SignupPage";
import VerifyEmailPage from "./pages/authpage/VerifyEmailPage";
import LoginPage from "./pages/authpage/LoginPage";
import ResetPassword from "./components/authcomponents/forgotPassword/ResetPassword";

function App() {
  return (
    <>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
