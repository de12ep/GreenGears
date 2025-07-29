import { Navigate } from "react-router-dom";

export function PrivateRoute({ children, allowedRole }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" />;

  if (allowedRole && role !== allowedRole) return <Navigate to="/" />;

  return children;
}
