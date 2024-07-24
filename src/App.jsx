import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupPage from "./pages/authpage/SignupPage";
import VerifyEmailPage from "./pages/authpage/VerifyEmailPage";
import LoginPage from "./pages/authpage/LoginPage";

function App() {
  return (
    <>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
