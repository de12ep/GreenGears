import { Navigate } from "react-router-dom";

export function PrivateRoute({ children, allowedRole }) {
  const token = localStorage.getItem("jwt");
  const role = localStorage.getItem("role");

  console.log("Token:", token);
  console.log("Stored Role:", role);
  console.log("Allowed Role:", allowedRole);

  if (!token) {
    console.warn("No JWT token found.");
    return <Navigate to="/login" />;
  }

  if (allowedRole && role?.toUpperCase() !== allowedRole.toUpperCase()) {
    console.warn("Role mismatch. Redirecting...");
    return <Navigate to="/" />;
  }

  return children;
}
