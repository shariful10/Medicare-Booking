import App from "../App";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Home from "../pages/HomePage/Home/Home";
import Doctor from "../pages/DoctorsPage/Doctor";
import Contact from "../pages/ContactPage/Contact";
import Services from "../pages/ServicesPage/Services";
import { createBrowserRouter } from "react-router-dom";
import DoctorDetails from "../pages/DoctorsPage/DoctorDetails";
import MyAccount from "../Dashboard/UserAccount/MyAccount";
import Dashboard from "../Dashboard/DoctorAccount/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/services",
				element: <Services />,
			},
			{
				path: "/doctors",
				element: <Doctor />,
			},
			{
				path: "/doctors/:id",
				element: <DoctorDetails />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Signup />,
			},
			{
				path: "/users/profile/me",
				element: (
					<ProtectedRoute allowedRoles={["patient"]}>
						<MyAccount />
					</ProtectedRoute>
				),
			},
			{
				path: "/doctors/profile/me",
				element: (
					<ProtectedRoute allowedRoles={["doctor"]}>
						<Dashboard />
					</ProtectedRoute>
				),
			},
		],
	},
]);
