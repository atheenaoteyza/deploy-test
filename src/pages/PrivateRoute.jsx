import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth); // Get user state from Redux

  if (!user) {
    return <Link to="/" />; // Redirect to Login if not authenticated
  }

  return children;
};
