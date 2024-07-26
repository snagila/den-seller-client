import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateAdminRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);

  //   if user is not logged in
  if (!user?._id) {
    return <Navigate to="/" />;
  }
  if (user?.role === "admin") {
    return children;
  }
  return <Navigate to="/" />;
};

export default PrivateAdminRoute;
