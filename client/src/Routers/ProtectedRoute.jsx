import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../components/Hooks/useAuth";

const ProtectedRoute = ({ children, allowedRoles }) => {
	const { token, role } = useAuth();
	const isAllowed = allowedRoles.includes(role);
	const accessibleRoute =
		token && isAllowed ? children : <Navigate to="/login" replace={true} />;

	return accessibleRoute;
};

export default ProtectedRoute;
