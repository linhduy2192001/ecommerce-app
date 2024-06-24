import React from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const AdminRouter = ({ redirect = "/" }) => {
  const { user } = useAuth();
  const isAdmin = user && user.username === "admin";

  if (!isAdmin) {
    return <Navigate to={redirect} />;
  }
  return <Outlet />;
};

export default AdminRouter;
