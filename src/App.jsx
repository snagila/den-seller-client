import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupPage from "./pages/authpage/SignupPage";

function App() {
  return (
    <>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
